"""
update_jeongli.py — 노션 정리본 모음집 → data.js 자동 업데이트

실행 방법:
  python update_jeongli.py          ← data.js 업데이트만
  python update_jeongli.py --push   ← 업데이트 후 GitHub 자동 push

매주 월요일 자동 실행: GitHub Actions (.github/workflows/update-jeongli.yml)
"""

import os
import re
import sys
import json
import requests
from pathlib import Path
from datetime import date

# ── 설정 ──────────────────────────────────────────
NOTION_TOKEN   = os.environ.get("NOTION_TOKEN", "")
if not NOTION_TOKEN:
    # 로컬 실행 시 .env 파일에서 읽기
    env_file = Path(__file__).parent / ".env"
    if env_file.exists():
        for line in env_file.read_text(encoding="utf-8").splitlines():
            if line.startswith("NOTION_TOKEN="):
                NOTION_TOKEN = line.split("=", 1)[1].strip()
                break
if not NOTION_TOKEN:
    print("❌ NOTION_TOKEN 환경변수 또는 .env 파일이 필요합니다.")
    sys.exit(1)
NOTION_VERSION = "2022-06-28"
ROOT_PAGE_ID   = "35413b2c9ebf43d190e17a3777816625"
NOTION_URL     = f"https://www.notion.so/{ROOT_PAGE_ID}"

DATA_JS = Path(__file__).parent / "data.js"
# ──────────────────────────────────────────────────

HEADERS = {
    "Authorization": f"Bearer {NOTION_TOKEN}",
    "Notion-Version": NOTION_VERSION,
}


def page_url(page_id: str) -> str:
    """UUID 형식 page_id → Notion 단축 URL"""
    return "https://www.notion.so/" + page_id.replace("-", "")


def get_children(block_id: str) -> list:
    url = f"https://api.notion.com/v1/blocks/{block_id}/children?page_size=100"
    r = requests.get(url, headers=HEADERS, timeout=15)
    r.raise_for_status()
    return r.json().get("results", [])


def extract_text(rich_text_list: list) -> str:
    return "".join(t.get("plain_text", "") for t in rich_text_list)


def fetch_jeongli() -> dict:
    """노션 페이지를 순회하여 카테고리/아이템 구조 추출"""
    print("📖 노션 정리본 페이지 읽는 중...")
    blocks = get_children(ROOT_PAGE_ID)

    categories = []
    current_cat = None   # { title, items or groups, current_group }
    current_group = None  # { subtitle, items }

    for block in blocks:
        btype = block["type"]

        if btype == "heading_1":
            # 이전 카테고리 저장
            if current_cat:
                if current_group:
                    current_cat.setdefault("groups", []).append(current_group)
                    current_group = None
                categories.append(current_cat)

            title = extract_text(block["heading_1"]["rich_text"])
            # 대괄호 제거 [피부 관련] → 피부 관련
            title = title.strip("[]").strip()
            current_cat = {"title": title}

        elif btype == "heading_2" and current_cat is not None:
            # 소제목 (공구 화장품, 여드름, 기타 등)
            if current_group:
                current_cat.setdefault("groups", []).append(current_group)
            subtitle = extract_text(block["heading_2"]["rich_text"])
            current_group = {"subtitle": subtitle, "items": []}

        elif btype == "child_page" and current_cat is not None:
            title = block["child_page"]["title"]
            url = page_url(block["id"])
            item = {"title": title, "url": url}
            if current_group is not None:
                current_group["items"].append(item)
            else:
                current_cat.setdefault("items", []).append(item)

        elif btype == "synced_block" and current_cat is not None:
            # synced block 내부 child_page 도 수집
            sub_blocks = get_children(block["id"])
            for sb in sub_blocks:
                if sb["type"] == "child_page":
                    title = sb["child_page"]["title"]
                    url = page_url(sb["id"])
                    item = {"title": title, "url": url}
                    if current_group is not None:
                        current_group["items"].append(item)
                    else:
                        current_cat.setdefault("items", []).append(item)

        elif btype == "paragraph" and current_cat is not None:
            # 텍스트로 된 링크 항목 (예: 53. 종합비타민 → instagram URL)
            rich = block["paragraph"]["rich_text"]
            if not rich:
                continue
            full_text = extract_text(rich)
            # URL 포함 여부 확인
            for seg in rich:
                href = seg.get("href") or (seg.get("text", {}).get("link") or {}).get("url")
                if href:
                    item = {"title": full_text.split("→")[0].strip(), "url": href}
                    if current_group is not None:
                        current_group["items"].append(item)
                    else:
                        current_cat.setdefault("items", []).append(item)
                    break

    # 마지막 카테고리 저장
    if current_cat:
        if current_group:
            current_cat.setdefault("groups", []).append(current_group)
        categories.append(current_cat)

    # items 없는 빈 카테고리 제거
    categories = [c for c in categories if c.get("items") or c.get("groups")]

    print(f"   → {len(categories)}개 카테고리 발견")
    return {"notionUrl": NOTION_URL, "categories": categories}


def update_data_js(jeongli_data: dict) -> bool:
    """data.js 의 jeongli 블록만 교체"""
    content = DATA_JS.read_text(encoding="utf-8")

    new_block = "jeongli: " + json.dumps(jeongli_data, ensure_ascii=False, indent=4)

    pattern = r"jeongli:\s*\{.*?\}\s*\n\};"
    updated = re.sub(pattern, new_block + "\n\n};", content, flags=re.DOTALL)

    if updated == content:
        print("⚠️  data.js 에서 jeongli 블록을 찾지 못했습니다.")
        return False

    DATA_JS.write_text(updated, encoding="utf-8")
    print("✅ data.js jeongli 업데이트 완료")
    return True


def git_push():
    import subprocess
    root = Path(__file__).parent
    try:
        subprocess.run(["git", "add", "data.js"], cwd=root, check=True)
        subprocess.run(
            ["git", "commit", "-m", f"정리본 모음집 자동 업데이트 ({date.today()})"],
            cwd=root, check=True
        )
        subprocess.run(["git", "push"], cwd=root, check=True)
        print("🚀 GitHub push 완료")
    except subprocess.CalledProcessError as e:
        print(f"⚠️  git 오류: {e}")


if __name__ == "__main__":
    data = fetch_jeongli()
    ok = update_data_js(data)
    if ok and "--push" in sys.argv:
        git_push()
