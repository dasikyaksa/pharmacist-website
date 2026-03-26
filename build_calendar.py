"""
build_calendar.py — 구글 캘린더 → data.js 자동 업데이트

실행 방법:
  python build_calendar.py          ← data.js 업데이트만
  python build_calendar.py --push   ← 업데이트 후 GitHub 자동 push

매일 자동 실행 원하면: run.bat 에 아래 줄 추가
  python C:\\Users\\user\\pharmacist-website\\build_calendar.py --push
"""

import re
import sys
import json
import requests
from pathlib import Path
from datetime import date, timedelta

try:
    from icalendar import Calendar
except ImportError:
    import subprocess
    subprocess.run([sys.executable, "-m", "pip", "install", "icalendar", "-q"], check=True)
    from icalendar import Calendar

# ── 설정 ──────────────────────────────────────────
ICAL_URL = (
    "https://calendar.google.com/calendar/ical/"
    "f51ea9220cc83e35c6b275a3ed7a4c4ac1088a9e46d743d943da7529ce99203c"
    "%40group.calendar.google.com/private-37db69cd3fa4c8a7e06b4e7817942333/basic.ics"
)

# 3일 미만 이벤트는 공구일정이 아닌 것으로 간주 (gonggu_sync.py 기준 동일)
MIN_DAYS = 3

# 현재 날짜 기준 앞뒤 몇 달치 일정을 가져올지
MONTHS_AHEAD = 3

# data.js 경로
DATA_JS = Path(__file__).parent / "data.js"
# ──────────────────────────────────────────────────


def fetch_events() -> list[dict]:
    """iCal URL에서 공구일정 이벤트 파싱"""
    print("📅 구글 캘린더 불러오는 중...")
    resp = requests.get(ICAL_URL, timeout=15)
    resp.raise_for_status()

    cal = Calendar.from_ical(resp.content)
    today = date.today()
    cutoff = today - timedelta(days=7)           # 7일 지난 공구는 제외
    limit  = today + timedelta(days=MONTHS_AHEAD * 30)

    events = []
    for component in cal.walk():
        if component.name != "VEVENT":
            continue

        summary = str(component.get("SUMMARY", "")).strip()
        dtstart = component.get("DTSTART")
        dtend   = component.get("DTEND")

        if not dtstart or not dtend:
            continue

        start = dtstart.dt if hasattr(dtstart.dt, "year") else dtstart.dt.date()
        end   = dtend.dt   if hasattr(dtend.dt,   "year") else dtend.dt.date()

        # date 타입으로 통일
        if hasattr(start, "date"):
            start = start.date()
        if hasattr(end, "date"):
            end = end.date()

        # 기간 필터 (3일 미만 제외)
        if (end - start).days < MIN_DAYS:
            continue

        # 날짜 범위 필터
        if end < cutoff or start > limit:
            continue

        events.append({
            "title":     summary,
            "start":     start.isoformat(),
            "end":       (end - timedelta(days=1)).isoformat(),  # iCal end는 exclusive
            "thumbnail": f"https://placehold.co/80x80/ffc2c2/FFFFFF?text={requests.utils.quote(summary)}",
            "link":      "https://www.instagram.com/pharm_baksoyun/"  # ← 나중에 제품별 링크로 교체 가능
        })

    # 시작일 순 정렬
    events.sort(key=lambda e: e["start"])
    print(f"   → {len(events)}개 일정 발견")
    return events


def update_data_js(events: list[dict]):
    """data.js 의 calendar 배열만 교체"""
    content = DATA_JS.read_text(encoding="utf-8")

    # calendar: [ ... ] 블록을 새 데이터로 교체
    new_block = "calendar: " + json.dumps(events, ensure_ascii=False, indent=4)

    # 기존 calendar: [...] 블록 찾아서 교체 (multiline)
    pattern = r"calendar:\s*\[.*?\]"
    updated = re.sub(pattern, new_block, content, flags=re.DOTALL)

    if updated == content:
        print("⚠️  data.js 에서 calendar 블록을 찾지 못했습니다. 패턴을 확인하세요.")
        return False

    DATA_JS.write_text(updated, encoding="utf-8")
    print(f"✅ data.js 업데이트 완료 ({len(events)}개 일정)")
    return True


def git_push():
    """변경사항 git push"""
    import subprocess
    root = Path(__file__).parent
    try:
        subprocess.run(["git", "add", "data.js"], cwd=root, check=True)
        subprocess.run(
            ["git", "commit", "-m", f"캘린더 자동 업데이트 ({date.today()})"],
            cwd=root, check=True
        )
        subprocess.run(["git", "push"], cwd=root, check=True)
        print("🚀 GitHub push 완료")
    except subprocess.CalledProcessError as e:
        print(f"⚠️  git 오류: {e}")


if __name__ == "__main__":
    events = fetch_events()
    if events:
        ok = update_data_js(events)
        if ok and "--push" in sys.argv:
            git_push()
    else:
        print("가져온 일정이 없습니다.")
