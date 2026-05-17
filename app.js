/**
 * app.js — 박약다식 한 눈에 보기
 * 검색 / 캘린더 / 카드 렌더링 / 모바일 메뉴
 */

document.addEventListener('DOMContentLoaded', () => {
  renderProfile();
  renderJeongli();
  renderMustRead();
  renderCalendar(new Date());
  renderProducts();
  renderFacpok();
  initSearch();
  initMobileMenu();
  initNavHighlight();
});

/* ──────────────────────────────────────────
   정리본 모음집 (아코디언)
────────────────────────────────────────── */
function renderJeongli() {
  const container = document.getElementById('jeongli-container');
  if (!container || !DATA.jeongli) return;

  const { categories } = DATA.jeongli;

  // 카테고리 내 모든 아이템 추출 (그룹 포함)
  function getAllItems(cat) {
    if (cat.groups) return cat.groups.flatMap(g => g.items);
    return cat.items || [];
  }

  // 아이템 제목에서 앞 번호 추출 ("15. 베르베린" → 15, "✔️53. 종합비" → 53)
  function extractNum(title) {
    const m = title.match(/(\d+)\./);
    return m ? parseInt(m[1]) : null;
  }

  // "(15번)" 또는 "(1~14번)" 형식
  function numRange(cat) {
    const nums = getAllItems(cat).map(i => extractNum(i.title)).filter(n => n !== null);
    if (!nums.length) return '';
    const mn = Math.min(...nums), mx = Math.max(...nums);
    return mn === mx ? `(${mn}번)` : `(${mn}~${mx}번)`;
  }

  container.innerHTML = categories.map((cat, idx) => {
    const bodyId = `jb-${idx}`;
    const range  = numRange(cat);

    let bodyHtml = '';
    if (cat.groups) {
      bodyHtml = cat.groups.map(g => `
        <div class="jeongli-subgroup">
          <span class="jeongli-subtitle">${g.subtitle}</span>
          <ul class="jeongli-list">
            ${g.items.map(item => `
              <li><a class="jeongli-item" href="${item.url}" target="_blank" rel="noopener">${item.title}</a></li>
            `).join('')}
          </ul>
        </div>
      `).join('');
    } else {
      bodyHtml = `
        <ul class="jeongli-list">
          ${getAllItems(cat).map(item => `
            <li><a class="jeongli-item" href="${item.url}" target="_blank" rel="noopener">${item.title}</a></li>
          `).join('')}
        </ul>
      `;
    }

    return `
      <div class="jeongli-card">
        <button class="jeongli-cat-btn" aria-expanded="false" aria-controls="${bodyId}"
                onclick="toggleJeongli(this)">
          <span class="jeongli-cat-title">${cat.title}</span>
          ${range ? `<span class="jeongli-num-range">${range}</span>` : ''}
          <span class="jeongli-arrow" aria-hidden="true">▾</span>
        </button>
        <div class="jeongli-body" id="${bodyId}" hidden>
          ${bodyHtml}
        </div>
      </div>
    `;
  }).join('');
}

function toggleJeongli(btn) {
  const expanded = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', String(!expanded));
  const body = document.getElementById(btn.getAttribute('aria-controls'));
  body.hidden = expanded;
}

/* ──────────────────────────────────────────
   프로필
────────────────────────────────────────── */
function renderProfile() {
  const { profile } = DATA;
  const photoWrap = document.querySelector('.profile-photo-wrap');

  // 프로필 사진: 파일이 없을 경우 텍스트 이니셜 표시
  const img = document.createElement('img');
  img.src = profile.photo;
  img.alt = '박소윤 약사';
  img.onerror = () => {
    photoWrap.innerHTML = '<span class="profile-photo-fallback">박</span>';
  };
  photoWrap.appendChild(img);

  // 인스타 버튼 링크
  const btn = document.querySelector('.profile-insta-btn');
  if (btn) btn.href = profile.instagramUrl;
}

/* ──────────────────────────────────────────
   섹션 1: 공구 참여 전 필독
────────────────────────────────────────── */
function renderMustRead() {
  const grid = document.getElementById('mustread-grid');
  grid.innerHTML = DATA.mustRead.map(item => `
    <a class="mustread-card" href="${item.link}" target="_blank" rel="noopener">
      <img class="mustread-thumb" src="${item.thumbnail}" alt="${item.title}" loading="lazy">
      <div class="mustread-info">
        <p class="mustread-title">${item.title}</p>
        <p class="mustread-sub">${item.subtitle}</p>
      </div>
    </a>
  `).join('');
}

/* ──────────────────────────────────────────
   섹션 2: 캘린더
────────────────────────────────────────── */
let calState = { year: 0, month: 0 };

function renderCalendar(date) {
  calState.year  = date.getFullYear();
  calState.month = date.getMonth();

  const y = calState.year;
  const m = calState.month;

  // 월 레이블
  const label = document.getElementById('cal-month-label');
  label.textContent = `${y}년 ${m + 1}월`;

  // 문자열 기준 날짜 헬퍼 (timezone 완전 무관)
  const monthStr  = `${y}-${String(m + 1).padStart(2, '0')}`;  // "2026-05"
  const pad = n => String(n).padStart(2, '0');
  const dateStr = d => `${monthStr}-${pad(d)}`;                 // "2026-05-07"

  // 달력 생성
  const firstDay    = new Date(y, m, 1).getDay();
  const daysInMonth = new Date(y, m + 1, 0).getDate();
  const daysInPrev  = new Date(y, m, 0).getDate();

  const today = new Date();
  const isCurrentMonth = today.getFullYear() === y && today.getMonth() === m;

  const grid = document.getElementById('cal-grid');
  grid.innerHTML = '';

  // 이전 달 빈 칸
  for (let i = firstDay - 1; i >= 0; i--) {
    grid.appendChild(makeDayCell(daysInPrev - i, true, false, false, [], null));
  }

  // 이번 달 — 각 날짜에 걸쳐있는 이벤트를 직접 필터링
  for (let d = 1; d <= daysInMonth; d++) {
    const ds  = dateStr(d);
    const dow = new Date(y, m, d).getDay();
    const isToday = isCurrentMonth && d === today.getDate();

    // 시작일이 이 날인 이벤트 표시
    // 이전 달에 시작한 이벤트(end가 이번 달에 걸침)는 1일에만 표시
    const dayEvents = DATA.calendar.filter(ev => {
      if (ev.start.slice(0, 7) === monthStr) {
        return parseInt(ev.start.slice(8), 10) === d;           // 이번 달 시작 → 시작일에 표시
      }
      return d === 1 && ev.start < dateStr(1) && ev.end >= dateStr(1); // 이전 달 시작 → 1일에만
    });

    grid.appendChild(makeDayCell(d, false, isToday, dow, dayEvents, null));
  }

  // 다음 달 빈 칸 채우기 (7의 배수 맞추기)
  const filled = firstDay + daysInMonth;
  const remain = filled % 7 === 0 ? 0 : 7 - (filled % 7);
  for (let i = 1; i <= remain; i++) {
    grid.appendChild(makeDayCell(i, true, false, false, null, null));
  }
}

/* 캘린더 제목 → 사용설명서 링크 매칭 */
function getProductLink(calTitle) {
  const title = calTitle.replace(/\s*예정[!！]?/, '').trim().toLowerCase();
  for (const cat of DATA.productCategories) {
    for (const p of cat.items) {
      const name = p.name.toLowerCase();
      if (title.includes(name) || name.includes(title)) {
        return (p.link && p.link !== '#') ? p.link : null;
      }
    }
  }
  return null;
}

function showCalPopup(message) {
  let overlay = document.getElementById('cal-popup-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'cal-popup-overlay';
    overlay.innerHTML = `
      <div class="cal-popup-box">
        <p class="cal-popup-msg"></p>
        <button class="cal-popup-close">확인</button>
      </div>`;
    overlay.addEventListener('click', e => {
      if (e.target === overlay || e.target.classList.contains('cal-popup-close'))
        overlay.classList.remove('active');
    });
    document.body.appendChild(overlay);
  }
  overlay.querySelector('.cal-popup-msg').textContent = message;
  overlay.classList.add('active');
}

function makeDayCell(dayNum, otherMonth, isToday, dow, events, _) {
  const cell = document.createElement('div');
  cell.className = 'cal-cell';
  if (otherMonth) cell.classList.add('other-month');
  if (isToday)    cell.classList.add('today');
  if (dow === 0)  cell.classList.add('sunday');
  if (dow === 6)  cell.classList.add('saturday');

  const numEl = document.createElement('span');
  numEl.className = 'cal-date-num';
  numEl.textContent = dayNum;
  cell.appendChild(numEl);

  if (events && events.length) {
    events.forEach(ev => {
      const productLink = getProductLink(ev.title);
      const btn = document.createElement(productLink ? 'a' : 'button');
      btn.className = 'cal-event';
      if (productLink) {
        btn.href = productLink;
        btn.target = '_blank';
        btn.rel = 'noopener';
      } else {
        btn.type = 'button';
        btn.addEventListener('click', () =>
          showCalPopup('해당 제품은 상세보기와 사전알림이 불가합니다')
        );
      }
      btn.innerHTML = `<span class="cal-event-name">${ev.title}</span>`;
      cell.appendChild(btn);
    });
  }

  return cell;
}

// 캘린더 네비게이션
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('cal-prev')?.addEventListener('click', () => {
    const d = new Date(calState.year, calState.month - 1, 1);
    renderCalendar(d);
  });
  document.getElementById('cal-next')?.addEventListener('click', () => {
    const d = new Date(calState.year, calState.month + 1, 1);
    renderCalendar(d);
  });
});

/* ──────────────────────────────────────────
   섹션 3: 사용설명서
────────────────────────────────────────── */
function renderProducts() {
  const container = document.getElementById('products-grid');
  container.innerHTML = DATA.productCategories.map(cat => `
    <div class="facpok-group">
      <span class="facpok-group-title"># ${cat.category}</span>
      <div class="product-card-grid">
        ${cat.items.map(p => makeContentCard({
          name:      p.name,
          thumbnail: p.thumbnail,
          link:      p.link,
          tags:      p.tags,
          comingSoon: p.comingSoon || null
        })).join('')}
      </div>
    </div>
  `).join('');
}

/* ──────────────────────────────────────────
   섹션 4: 팩폭 시리즈
────────────────────────────────────────── */
function renderFacpok() {
  const container = document.getElementById('facpok-container');

  // group별로 묶기
  const groups = {};
  DATA.facpok.forEach(item => {
    const g = item.group || '기타';
    if (!groups[g]) groups[g] = [];
    groups[g].push(item);
  });

  container.innerHTML = Object.entries(groups).map(([groupName, items]) => `
    <div class="facpok-group">
      <span class="facpok-group-title"># ${groupName}</span>
      <div class="card-grid">
        ${items.map(item => makeContentCard({
          name:      `${item.title}`,
          episode:   item.episode,
          thumbnail: item.thumbnail,
          link:      item.link,
          tags:      item.tags
        })).join('')}
      </div>
    </div>
  `).join('');
}

/* ──────────────────────────────────────────
   공통 카드 HTML 생성
────────────────────────────────────────── */
function makeContentCard({ name, episode, thumbnail, link, tags, comingSoon }) {
  const tagsHtml = (tags || [])
    .slice(0, 3)
    .map(t => `<span class="card-tag">${t}</span>`)
    .join('');
  const episodeHtml = episode ? `<p class="card-episode">${episode}</p>` : '';

  // comingSoon 항목: 클릭 안 되고 뱃지만 표시
  if (comingSoon) {
    return `
    <div class="content-card content-card--coming">
      <div class="card-thumb-wrap">
        <img class="card-thumb" src="${thumbnail}" alt="${name}" loading="lazy">
        <div class="card-coming-badge">🌸 ${comingSoon}</div>
      </div>
      <div class="card-label">
        <p class="card-name">${name}</p>
        <div class="card-tags">${tagsHtml}</div>
      </div>
    </div>
  `;
  }

  return `
    <a class="content-card" href="${link}" target="_blank" rel="noopener">
      <div class="card-thumb-wrap">
        <img class="card-thumb" src="${thumbnail}" alt="${name}" loading="lazy">
        <div class="card-overlay">
          <span class="card-overlay-icon">📷</span>
        </div>
      </div>
      <div class="card-label">
        <p class="card-name">${name}</p>
        ${episodeHtml}
        <div class="card-tags">${tagsHtml}</div>
      </div>
    </a>
  `;
}

/* ──────────────────────────────────────────
   검색
────────────────────────────────────────── */
function buildSearchIndex() {
  const index = [];

  DATA.productCategories.forEach(cat => cat.items.forEach(p => index.push({
    name: p.name, thumbnail: p.thumbnail, link: p.link,
    tags: p.tags || [], section: '사용설명서'
  })));

  DATA.facpok.forEach(f => index.push({
    name: `${f.title} ${f.episode}`, thumbnail: f.thumbnail, link: f.link,
    tags: f.tags || [], section: '팩폭시리즈'
  }));

  DATA.calendar.forEach(c => index.push({
    name: c.title + ' 공구일정', thumbnail: c.thumbnail, link: c.link,
    tags: [c.title], section: '공구일정'
  }));

  return index;
}

function initSearch() {
  const input   = document.getElementById('search-input');
  const results = document.getElementById('search-results');
  const index   = buildSearchIndex();

  let debounceTimer;

  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const q = input.value.trim().toLowerCase();

      if (!q) {
        results.classList.add('hidden');
        results.innerHTML = '';
        return;
      }

      const matched = index.filter(item => {
        const haystack = [item.name, ...item.tags].join(' ').toLowerCase();
        return haystack.includes(q);
      });

      results.classList.remove('hidden');

      if (!matched.length) {
        results.innerHTML = `<p class="search-empty">검색 결과가 없습니다 🔍</p>`;
        return;
      }

      results.innerHTML = `
        <p class="search-result-header">
          "<strong>${input.value.trim()}</strong>" 검색 결과 — ${matched.length}개
        </p>
        <div class="search-grid">
          ${matched.map(item => makeContentCard({
            name:      item.name,
            thumbnail: item.thumbnail,
            link:      item.link,
            tags:      [`#${item.section}`, ...item.tags.slice(0,2)]
          })).join('')}
        </div>
      `;
    }, 250);
  });
}

/* ──────────────────────────────────────────
   모바일 메뉴 토글
────────────────────────────────────────── */
function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const nav    = document.getElementById('nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // 메뉴 링크 클릭 시 닫기
  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

/* ──────────────────────────────────────────
   스크롤 기반 네비 하이라이트
────────────────────────────────────────── */
function initNavHighlight() {
  const sections = ['jeongli', 'mustread', 'manuals', 'facpok', 'schedule'];
  const links    = document.querySelectorAll('.nav-link[data-section]');
  const headerH  = 64;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const activeLink = document.querySelector(
          `.nav-link[data-section="${entry.target.id}"]`
        );
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }, { rootMargin: `-${headerH}px 0px -60% 0px` });

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}
