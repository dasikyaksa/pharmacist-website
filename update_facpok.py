"""
update_facpok.py — 매주 새 팩폭 컨텐츠 자동 추가

인스타그램에서 지난 7일간 "팩폭" 키워드가 포함된 게시물을 찾아
data.js의 facpok 배열에 자동으로 추가합니다.

카테고리 분류:
  "팩폭리뷰" 포함 → #팩폭리뷰
  비타민D 관련    → 비타민D
  오메가3 관련    → 오메가3
  유산균 관련     → 유산균
  약국/꿀팁 관련  → 약국 꿀팁
  그 외           → 영양제 팩폭

실행 방법:
  python update_facpok.py           ← data.js 업데이트만
  python update_facpok.py --push    ← 업데이트 후 GitHub push
"""

import os, re, json, sys, requests
from datetime import date, datetime, timedelta
from pathlib import Path
from dotenv import load_dotenv

load_dotenv(Path(__file__).parent.parent / 'instagram-notion-sync' / '.env')

TOKEN   = os.getenv('FACEBOOK_PAGE_TOKEN') or os.getenv('INSTAGRAM_TOKEN')
USER_ID = os.getenv('INSTAGRAM_USER_ID')
DATA_JS = Path(__file__).parent / 'data.js'
IMG_DIR = Path(__file__).parent / 'images' / 'facpok'

# ── 카테고리 분류 규칙 ─────────────────────────────────
def classify_group(caption):
    cap = caption.lower()
    if '팩폭리뷰' in cap:
        return '팩폭리뷰'
    if any(k in cap for k in ['비타민d', '비타민디', 'k2', '칼슘']):
        return '비타민D'
    if any(k in cap for k in ['오메가3', '오메가 3', '알티지', '중성지방']):
        return '오메가3'
    if any(k in cap for k in ['유산균', '프로바이오틱', '장건강', '장내', '질유산균']):
        return '유산균'
    if any(k in cap for k in ['약국', '꿀팁', '사지마', '안약', '흉터', '피임약', '빌베리']):
        return '약국 꿀팁'
    return '영양제 팩폭'


def make_title(caption):
    """캡션 첫 줄을 제목으로 사용 (40자 초과 시 자름)"""
    first = caption.strip().split('\n')[0].strip()
    # 해시태그, 이모지 등 정리
    first = re.sub(r'#\S+', '', first).strip()
    return first[:40] if first else '팩폭 컨텐츠'


# ── 현재 data.js에 있는 facpok 링크 목록 ──────────────
def get_existing_links():
    content = DATA_JS.read_text(encoding='utf-8')
    return set(re.findall(r'link:\s*"(https://www\.instagram\.com/[^"]+)"', content))


# ── 인스타그램 게시물 가져오기 (지난 7일) ──────────────
def fetch_recent_facpok_posts():
    cutoff = datetime.utcnow() - timedelta(days=8)
    all_posts = []
    url = (
        f'https://graph.facebook.com/v18.0/{USER_ID}/media'
        f'?fields=id,shortcode,media_url,thumbnail_url,media_type,caption,timestamp,permalink'
        f'&limit=50&access_token={TOKEN}'
    )
    while url:
        r = requests.get(url, timeout=15)
        data = r.json()
        posts = data.get('data', [])
        for p in posts:
            ts = datetime.strptime(p['timestamp'], '%Y-%m-%dT%H:%M:%S%z').replace(tzinfo=None)
            if ts < cutoff:
                return all_posts   # 시간순 정렬이므로 이후는 더 오래됨
            cap = p.get('caption') or ''
            if '팩폭' in cap:
                all_posts.append(p)
        url = data.get('paging', {}).get('next', '')
    return all_posts


# ── 썸네일 다운로드 ────────────────────────────────────
def download_thumb(post):
    IMG_DIR.mkdir(parents=True, exist_ok=True)
    sc = post.get('shortcode', post['id'])

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
    # 비디오(mp4) 가져온 경우 thumbnail_url로 재시도
    if b'ftyp' in r.content[:12]:
        img_url = post.get('thumbnail_url')
        if img_url:
            r = requests.get(img_url, timeout=15)

    if r.status_code != 200:
        return None

    path = IMG_DIR / f'{sc}.jpg'
    path.write_bytes(r.content)
    return f'images/facpok/{sc}.jpg'


# ── data.js facpok 배열에 항목 추가 ────────────────────
def append_to_facpok(new_items):
    """new_items: [{'group':..,'title':..,'thumbnail':..,'link':..,'tags':[..]}]"""
    content = DATA_JS.read_text(encoding='utf-8')

    # facpok 배열 끝 위치 찾기 (마지막 항목 다음 ] 앞)
    # 패턴: 마지막 }  이후 줄바꿈+공백+]
    m = re.search(r'(facpok:\s*\[)(.*?)(\s*\]\s*\};)', content, re.DOTALL)
    if not m:
        print('❌ facpok 배열을 찾을 수 없습니다.')
        return False

    existing_block = m.group(2)

    # 새 항목 JS 라인 생성
    new_lines = []
    for item in new_items:
        tags_js = json.dumps(item['tags'], ensure_ascii=False)
        new_lines.append(
            f'    {{ group: "{item["group"]}", title: "{item["title"]}", '
            f'tags: {tags_js}, '
            f'thumbnail: "{item["thumbnail"]}", link: "{item["link"]}" }}'
        )

    # 기존 블록 끝에 쉼표 + 새 항목 추가
    insert = ',\n'.join(new_lines)

    # 기존 마지막 항목에 쉼표가 없으면 추가
    trimmed = existing_block.rstrip()
    if trimmed and not trimmed.endswith(','):
        existing_block = trimmed + ',\n'

    new_block = existing_block + '\n' + insert + '\n  '
    updated = content[:m.start(2)] + new_block + content[m.start(3):]

    DATA_JS.write_text(updated, encoding='utf-8')
    return True


def git_push():
    import subprocess
    root = Path(__file__).parent
    subprocess.run(['git', 'add', 'data.js', 'images/facpok/'], cwd=root, check=True)
    result = subprocess.run(['git', 'diff', '--staged', '--quiet'], cwd=root)
    if result.returncode == 0:
        print('변경사항 없음 — push 스킵')
        return
    subprocess.run(
        ['git', 'commit', '-m', f'팩폭 시리즈 자동 업데이트 ({date.today()})'],
        cwd=root, check=True
    )
    subprocess.run(['git', 'push'], cwd=root, check=True)
    print('🚀 GitHub push 완료')


if __name__ == '__main__':
    print(f'🔄 팩폭 시리즈 자동 업데이트 ({date.today()})')

    if not TOKEN or not USER_ID:
        print('❌ FACEBOOK_PAGE_TOKEN 또는 INSTAGRAM_USER_ID 환경변수 없음')
        sys.exit(1)

    print('📱 지난 7일간 팩폭 게시물 검색 중...')
    posts = fetch_recent_facpok_posts()
    print(f'   → {len(posts)}개 팩폭 게시물 발견')

    if not posts:
        print('✅ 새 팩폭 게시물 없음 — 종료')
        sys.exit(0)

    existing_links = get_existing_links()
    new_items = []

    for post in posts:
        link = post.get('permalink', '')
        # 정규화: 끝 슬래시 제거 후 비교
        link_norm = link.rstrip('/')
        if any(link_norm in ex or ex.rstrip('/') == link_norm for ex in existing_links):
            print(f'  ⏭️  이미 있음: {link_norm[-30:]}')
            continue

        cap = post.get('caption') or ''
        group = classify_group(cap)
        title = make_title(cap)

        print(f'  ✨ 새 게시물: [{group}] {title[:35]}')

        thumb = download_thumb(post)
        if not thumb:
            print(f'     ⚠️  썸네일 다운로드 실패 — 스킵')
            continue

        # 태그 자동 생성
        tags = ['팩폭']
        if group == '팩폭리뷰':
            tags.append('팩폭리뷰')
        elif group != '영양제 팩폭':
            tags.append(group)

        new_items.append({
            'group':     group,
            'title':     title,
            'tags':      tags,
            'thumbnail': thumb,
            'link':      link,
        })

    if not new_items:
        print('✅ 추가할 새 항목 없음')
        sys.exit(0)

    print(f'\n📝 {len(new_items)}개 항목 data.js에 추가 중...')
    ok = append_to_facpok(new_items)
    if ok:
        print('✅ data.js 업데이트 완료')
        for item in new_items:
            print(f'   [{item["group"]}] {item["title"]}')

    if ok and '--push' in sys.argv:
        git_push()
