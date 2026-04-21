"""
update_manuals.py — 공구 마지막날 마감이벤트 피드 자동 업데이트

공구일정 달력에서 오늘이 마지막날인 제품을 찾아
인스타그램 API로 최신 마감이벤트 피드를 검색하고
data.js 공구제품 사용설명서 섹션을 자동으로 업데이트합니다.

실행 방법:
  python update_manuals.py           ← data.js 업데이트만
  python update_manuals.py --push    ← 업데이트 후 GitHub push
"""

import os, re, json, sys, requests
from datetime import date, timedelta
from pathlib import Path
from dotenv import load_dotenv

# .env 로드 (로컬 실행 시)
load_dotenv(Path(__file__).parent.parent / 'instagram-notion-sync' / '.env')

TOKEN   = os.getenv('FACEBOOK_PAGE_TOKEN') or os.getenv('INSTAGRAM_TOKEN')
USER_ID = os.getenv('INSTAGRAM_USER_ID')
DATA_JS = Path(__file__).parent / 'data.js'
IMG_DIR = Path(__file__).parent / 'images' / 'products'

# ── 캘린더 제목 → 제품명 매핑 ────────────────────────
TITLE_TO_PRODUCT = {
    '비타민d':          '비타민D',
    '비타민D':          '비타민D',
    '마그샷':           '마그샷',
    '오메안비려유':     '오메안비려유',
    '오메가미니':       '오메가미니',
    '오메가3 미니':     '오메가미니',
    '오메츄':           '오메츄',
    '필더데이':         '필더데이 오메가',
    '분홍이':           '분홍이',
    '초록이':           '초록이',
    '노랑이':           '노랑이',
    '여성유산균':       '여성유산균',
    '람노플':           '여성유산균',
    '산화마그네슘':     '갓성비 산화마그네슘',
    '갓성비 마그':      '갓성비 산화마그네슘',
    '칼마디':           '칼마디K2',
    '철분':             '풍선껌맛 철분',
    '풍선껌':           '풍선껌맛 철분',
    '바쿠치올':         '바쿠치올',
    '팜트리':           '팜트리 수분진정라인',
    '리들샷':           'VT 리들샷',
    'VT':               'VT 리들샷',
    '큐로세틴':         '큐로세틴',
    '디오시민':         '디오시민',
    '디오스민':         '디오시민',
    '루아빌':           '루아빌',
    '이노시톨':         '이노시톨',
    '아미노콤':         '아미노콤',
    '멜라코지':         '멜라코지',
    '베르베린':         '베르베린',
    '보라물':           '보라물',
    '생리대':           '생리대',
}

# ── 제품명 → 인스타 검색 키워드 ──────────────────────
PRODUCT_KEYWORDS = {
    '비타민D':              ['비타민d', '비타민D', '비타민디'],
    '오메안비려유':         ['오메안비려유', '안비려유'],
    '오메가미니':           ['오메가미니', '오메가 미니'],
    '오메츄':               ['오메츄'],
    '필더데이 오메가':      ['필더데이'],
    '분홍이':               ['분홍이'],
    '초록이':               ['초록이'],
    '노랑이':               ['노랑이'],
    '여성유산균':           ['람노퓨어', '람노플', '여성유산균'],
    '마그샷':               ['마그샷'],
    '갓성비 산화마그네슘':  ['산화마그네슘', '갓성비 마그'],
    '칼마디K2':             ['칼마디', 'k2'],
    '풍선껌맛 철분':        ['풍선껌', '철분'],
    '바쿠치올':             ['바쿠치올'],
    '팜트리 수분진정라인':  ['팜트리', '수분진정'],
    'VT 리들샷':            ['리들샷', 'VT'],
    '큐로세틴':             ['큐로세틴', '퀘르세틴'],
    '디오시민':             ['디오시민', '디오스민'],
    '루아빌':               ['루아빌'],
    '이노시톨':             ['이노시톨'],
    '아미노콤':             ['아미노콤'],
    '멜라코지':             ['멜라코지'],
    '베르베린':             ['베르베린'],
    '보라물':               ['보라물'],
    '생리대':               ['생리대'],
}

CLOSING_KEYWORDS = ['마감', '사용설명서']


def find_ending_today():
    """data.js 캘린더에서 오늘이 end 날짜인 제품 목록 반환"""
    today = date.today().isoformat()
    content = DATA_JS.read_text(encoding='utf-8')

    m = re.search(r'calendar:\s*(\[.*?\])', content, re.DOTALL)
    if not m:
        return []
    try:
        cal = json.loads(m.group(1))
    except Exception as e:
        print(f'캘린더 파싱 오류: {e}')
        return []

    ending = []
    for ev in cal:
        if ev.get('end') == today:
            title = ev.get('title', '')
            product = None
            title_lower = title.lower()
            for key, val in TITLE_TO_PRODUCT.items():
                if key.lower() in title_lower or title_lower in key.lower():
                    product = val
                    break
            if product:
                ending.append(product)
                print(f'  오늘 마감: [{title}] → {product}')
            else:
                print(f'  ⚠️  매핑 없음: [{title}]')
    return list(set(ending))


def fetch_all_posts():
    """인스타그램 전체 게시물 가져오기"""
    all_posts = []
    url = (
        f'https://graph.facebook.com/v18.0/{USER_ID}/media'
        f'?fields=id,shortcode,media_url,thumbnail_url,media_type,caption,timestamp,permalink'
        f'&limit=100&access_token={TOKEN}'
    )
    page = 0
    while url and page < 30:
        r = requests.get(url, timeout=15)
        data = r.json()
        all_posts.extend(data.get('data', []))
        url = data.get('paging', {}).get('next', '')
        page += 1
    return all_posts


def find_latest_closing(posts, product):
    """제품명으로 최신 마감이벤트 게시물 검색"""
    keywords = PRODUCT_KEYWORDS.get(product, [product])
    matched = []
    for p in posts:
        cap = (p.get('caption') or '').lower()
        has_product = any(k.lower() in cap for k in keywords)
        has_closing = any(k in (p.get('caption') or '') for k in CLOSING_KEYWORDS)
        if has_product and has_closing:
            matched.append(p)
    if not matched:
        return None
    return sorted(matched, key=lambda x: x['timestamp'], reverse=True)[0]


def download_thumb(post, product):
    """썸네일 다운로드 후 저장 경로 반환"""
    IMG_DIR.mkdir(parents=True, exist_ok=True)

    if post.get('media_type') == 'CAROUSEL_ALBUM':
        cr_url = (
            f"https://graph.facebook.com/v18.0/{post['id']}/children"
            f"?fields=media_url,thumbnail_url&access_token={TOKEN}"
        )
        cr = requests.get(cr_url, timeout=10)
        children = cr.json().get('data', [])
        img_url = children[0].get('media_url') if children else None
    elif post.get('media_type') == 'VIDEO':
        img_url = post.get('thumbnail_url')
    else:
        img_url = post.get('media_url')

    if not img_url:
        return None

    r = requests.get(img_url, timeout=15)
    if r.status_code != 200 or b'ftyp' in r.content[:12]:  # mp4 차단
        # 비디오면 thumbnail_url 재시도
        img_url = post.get('thumbnail_url')
        if img_url:
            r = requests.get(img_url, timeout=15)

    if r.status_code != 200:
        return None

    safe = re.sub(r'[^\w]', '_', product)
    path = IMG_DIR / f'prod_{safe}.jpg'
    path.write_bytes(r.content)
    rel = f'images/products/prod_{safe}.jpg'
    print(f'    썸네일 저장: {rel} ({len(r.content)//1024}KB)')
    return rel


def update_data_js(product, link, thumbnail):
    """data.js productCategories에서 해당 제품 link/thumbnail 교체"""
    content = DATA_JS.read_text(encoding='utf-8')

    # 한 줄짜리 제품 항목 패턴으로 교체
    escaped = re.escape(product)
    pattern = rf'(\{{[^{{}}]*name:\s*"{escaped}"[^{{}}]*thumbnail:\s*)"[^"]*"([^{{}}]*link:\s*)"[^"]*"'

    def replacer(m):
        return f'{m.group(1)}"{thumbnail}"{m.group(2)}"{link}"'

    updated = re.sub(pattern, replacer, content)

    if updated == content:
        # thumbnail/link 순서가 다른 경우
        pattern2 = rf'(\{{[^{{}}]*name:\s*"{escaped}"[^{{}}]*link:\s*)"[^"]*"([^{{}}]*thumbnail:\s*)"[^"]*"'
        def replacer2(m):
            return f'{m.group(1)}"{link}"{m.group(2)}"{thumbnail}"'
        updated = re.sub(pattern2, replacer2, content)

    if updated == content:
        print(f'    ⚠️  {product} 패턴 미일치 — 수동 확인 필요')
        return False

    DATA_JS.write_text(updated, encoding='utf-8')
    return True


def git_push():
    import subprocess
    root = Path(__file__).parent
    subprocess.run(['git', 'add', 'data.js', 'images/products/'], cwd=root, check=True)
    result = subprocess.run(
        ['git', 'diff', '--staged', '--quiet'], cwd=root
    )
    if result.returncode == 0:
        print('변경사항 없음 — push 스킵')
        return
    subprocess.run(
        ['git', 'commit', '-m', f'마감이벤트 자동 업데이트 ({date.today()})'],
        cwd=root, check=True
    )
    subprocess.run(['git', 'push'], cwd=root, check=True)
    print('🚀 GitHub push 완료')


if __name__ == '__main__':
    print(f'🔄 공구 마감이벤트 자동 업데이트 ({date.today()})')

    if not TOKEN or not USER_ID:
        print('❌ FACEBOOK_PAGE_TOKEN 또는 INSTAGRAM_USER_ID 환경변수 없음')
        sys.exit(1)

    ending_products = find_ending_today()
    if not ending_products:
        print('✅ 오늘 마감되는 공구 제품 없음 — 종료')
        sys.exit(0)

    print(f'\n📦 오늘 마감 제품: {ending_products}')
    print('📱 인스타그램 게시물 불러오는 중...')
    posts = fetch_all_posts()
    print(f'   → {len(posts)}개 게시물 로드')

    updated_any = False
    for product in ending_products:
        print(f'\n🔍 [{product}] 마감이벤트 검색...')
        post = find_latest_closing(posts, product)

        if not post:
            print(f'    ⚠️  마감이벤트 게시물 없음')
            continue

        cap_preview = (post.get('caption') or '')[:60].replace('\n', ' ')
        print(f'    📌 [{post["timestamp"][:10]}] {cap_preview}')

        thumb = download_thumb(post, product)
        if not thumb:
            print(f'    ⚠️  썸네일 다운로드 실패')
            continue

        link = post.get('permalink', '#')
        ok = update_data_js(product, link, thumb)
        if ok:
            print(f'    ✅ data.js 업데이트 완료')
            updated_any = True

    if updated_any and '--push' in sys.argv:
        git_push()
    elif not updated_any:
        print('\n⚠️  업데이트된 제품 없음')
    else:
        print('\n✅ 완료 (push 없이 로컬만 업데이트)')
