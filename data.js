/**
 * data.js — 박약다식 한 눈에 보기 | 컨텐츠 데이터
 *
 * ✏️ 이 파일만 수정하면 사이트 내용이 바뀝니다.
 * thumbnail: 인스타그램 게시물 이미지 URL 또는 로컬 이미지 경로 (images/파일명.jpg)
 * link: 인스타그램 게시물 URL (https://www.instagram.com/p/XXXX/)
 */

const DATA = {

  // ──────────────────────────────────────────────
  // 프로필
  // ──────────────────────────────────────────────
  profile: {
    photo: "images/profile.jpg",           // ← 프로필 사진 파일을 images/ 폴더에 넣어주세요
    instagramUrl: "https://www.instagram.com/pharm_baksoyun/",  // ← 인스타 주소
  },

  // ──────────────────────────────────────────────
  // 섹션 1: 공구 참여 전 필독!
  // ──────────────────────────────────────────────
  mustRead: [
    {
      title: "구매 전 상담",
      subtitle: "",
      thumbnail: "images/mustread1.jpg",
      link: "https://www.instagram.com/p/DFbYAOATe_W/?img_index=8"
    },
    {
      title: "구매 후 상담",
      subtitle: "",
      thumbnail: "images/mustread2.jpg",
      link: "https://www.instagram.com/p/DV-VrVVj5mf/?img_index=1"
    }
  ],

  // ──────────────────────────────────────────────
  // 섹션 2: 공구 일정 캘린더
  // ⚙️ build_calendar.py 를 실행하면 구글캘린더 기반으로 자동 업데이트됩니다.
  // 수동으로도 입력 가능합니다. start/end 형식: "YYYY-MM-DD"
  // ──────────────────────────────────────────────
  calendar: [
    {
        "title": "람노플 유산균",
        "start": "2026-03-17",
        "end": "2026-03-23",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EB%9E%8C%EB%85%B8%ED%94%8C%20%EC%9C%A0%EC%82%B0%EA%B7%A0",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "생리대",
        "start": "2026-03-23",
        "end": "2026-03-29",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EC%83%9D%EB%A6%AC%EB%8C%80",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "루아빌",
        "start": "2026-03-26",
        "end": "2026-04-01",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EB%A3%A8%EC%95%84%EB%B9%8C",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "큐로세틴",
        "start": "2026-03-31",
        "end": "2026-04-06",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%ED%81%90%EB%A1%9C%EC%84%B8%ED%8B%B4",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "분홍이",
        "start": "2026-04-06",
        "end": "2026-04-08",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EB%B6%84%ED%99%8D%EC%9D%B4",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "비타민D 예정!",
        "start": "2026-04-09",
        "end": "2026-04-15",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EB%B9%84%ED%83%80%EB%AF%BCD%20%EC%98%88%EC%A0%95%21",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "마그샷",
        "start": "2026-04-14",
        "end": "2026-04-20",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EB%A7%88%EA%B7%B8%EC%83%B7",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "나노레시피 공구",
        "start": "2026-04-16",
        "end": "2026-04-22",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EB%82%98%EB%85%B8%EB%A0%88%EC%8B%9C%ED%94%BC%20%EA%B3%B5%EA%B5%AC",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "베르베린",
        "start": "2026-04-21",
        "end": "2026-04-27",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EB%B2%A0%EB%A5%B4%EB%B2%A0%EB%A6%B0",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "오메안비려유",
        "start": "2026-04-23",
        "end": "2026-04-29",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EC%98%A4%EB%A9%94%EC%95%88%EB%B9%84%EB%A0%A4%EC%9C%A0",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "붓기 영양제",
        "start": "2026-04-28",
        "end": "2026-05-04",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EB%B6%93%EA%B8%B0%20%EC%98%81%EC%96%91%EC%A0%9C",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "칼마디",
        "start": "2026-04-30",
        "end": "2026-05-06",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EC%B9%BC%EB%A7%88%EB%94%94",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "사장님 off",
        "start": "2026-05-01",
        "end": "2026-05-09",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EC%82%AC%EC%9E%A5%EB%8B%98%20off",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "오메가3 미니",
        "start": "2026-05-01",
        "end": "2026-05-07",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EC%98%A4%EB%A9%94%EA%B0%803%20%EB%AF%B8%EB%8B%88",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "유산균 2종",
        "start": "2026-05-11",
        "end": "2026-05-17",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EC%9C%A0%EC%82%B0%EA%B7%A0%202%EC%A2%85",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "올리브유",
        "start": "2026-05-15",
        "end": "2026-05-20",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EC%98%AC%EB%A6%AC%EB%B8%8C%EC%9C%A0",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "이노시톨",
        "start": "2026-05-19",
        "end": "2026-05-25",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EC%9D%B4%EB%85%B8%EC%8B%9C%ED%86%A8",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "퓨어알티지",
        "start": "2026-05-21",
        "end": "2026-05-27",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%ED%93%A8%EC%96%B4%EC%95%8C%ED%8B%B0%EC%A7%80",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "바쿠치올",
        "start": "2026-05-26",
        "end": "2026-06-01",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EB%B0%94%EC%BF%A0%EC%B9%98%EC%98%AC",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "노랑이",
        "start": "2026-05-28",
        "end": "2026-06-03",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EB%85%B8%EB%9E%91%EC%9D%B4",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "큐로세틴",
        "start": "2026-06-02",
        "end": "2026-06-08",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%ED%81%90%EB%A1%9C%EC%84%B8%ED%8B%B4",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "쏙앤쏙",
        "start": "2026-06-09",
        "end": "2026-06-15",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EC%8F%99%EC%95%A4%EC%8F%99",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "아미노콤맥스",
        "start": "2026-06-11",
        "end": "2026-06-17",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EC%95%84%EB%AF%B8%EB%85%B8%EC%BD%A4%EB%A7%A5%EC%8A%A4",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "멜라코지나이트타임",
        "start": "2026-06-16",
        "end": "2026-06-22",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EB%A9%9C%EB%9D%BC%EC%BD%94%EC%A7%80%EB%82%98%EC%9D%B4%ED%8A%B8%ED%83%80%EC%9E%84",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "람노플",
        "start": "2026-06-18",
        "end": "2026-06-24",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EB%9E%8C%EB%85%B8%ED%94%8C",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "오메츄",
        "start": "2026-06-23",
        "end": "2026-06-29",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EC%98%A4%EB%A9%94%EC%B8%84",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    }
],

  // ──────────────────────────────────────────────
  // 섹션 3: 공구제품 사용설명서 몰아보기
  // 카테고리별로 정리 — thumbnail/link는 나중에 채워주세요
  // ──────────────────────────────────────────────
  productCategories: [
    {
      category: "박약다식 제품",
      items: [
        { name: "비타민D",     tags: ["비타민D", "면역", "뼈건강"],     thumbnail: "images/products/prod_vitd.jpg",              link: "https://www.instagram.com/p/DUHppzOD_Ua/" },
        { name: "여드름영양제", tags: ["여드름", "피부", "영양제"],      thumbnail: "images/products/prod_acne_coming.svg",       link: null, comingSoon: "5월 신규 오픈 예정" }
      ]
    },
    {
      category: "오메가3",
      items: [
        { name: "오메안비려유",    tags: ["오메가3", "알티지", "혈관"],  thumbnail: "images/products/prod_omegabig.jpg",          link: "https://www.instagram.com/p/DTz6RsFj6OG/" },
        { name: "오메가미니",      tags: ["오메가3", "소형", "혈관"],    thumbnail: "images/products/prod_omega_shared.jpg", link: "https://www.instagram.com/p/DUmLGgHE16J/" },
        { name: "오메츄",          tags: ["오메가3", "젤리", "어린이"],  thumbnail: "images/products/prod_omegachew.jpg",         link: "https://www.instagram.com/p/DSudvtICeDN/" },
        { name: "필더데이 오메가", tags: ["오메가3", "필더데이"],        thumbnail: "images/products/prod_omega_shared.jpg", link: "https://www.instagram.com/p/DUmLGgHE16J/" }
      ]
    },
    {
      category: "유산균",
      items: [
        { name: "분홍이",    tags: ["유산균", "프로바이오틱스", "장건강"], thumbnail: "images/products/prod_pink.jpg",             link: "https://www.instagram.com/p/DVR9gqzk5qe/" },
        { name: "초록이",    tags: ["유산균", "프리바이오틱스"],           thumbnail: "images/products/prod_pink.jpg",             link: "https://www.instagram.com/p/DVR9gqzk5qe/" },
        { name: "노랑이",    tags: ["유산균", "장건강"],                   thumbnail: "images/products/prod_pink.jpg",             link: "https://www.instagram.com/p/DVR9gqzk5qe/" },
        { name: "여성유산균", tags: ["유산균", "질유산균", "여성건강"],   thumbnail: "images/products/prod_femlab.jpg",            link: "https://www.instagram.com/p/DWIPE6ijweB/" }
      ]
    },
    {
      category: "미네랄",
      items: [
        { name: "마그샷",              tags: ["마그네슘", "수면", "근육"],      thumbnail: "images/products/prod_magshot.jpg",       link: "https://www.instagram.com/p/DTpxum2j-Ah/" },
        { name: "갓성비 산화마그네슘", tags: ["마그네슘", "변비", "갓성비"],   thumbnail: "images/products/prod_magox.jpg",         link: "https://www.instagram.com/p/DUfLcSKj-e0/" },
        { name: "칼마디K2",            tags: ["칼슘", "마그네슘", "비타민K2"], thumbnail: "images/products/prod_calmadi.jpg",       link: "https://www.instagram.com/p/DTE8FOKD5IB/" },
        { name: "풍선껌맛 철분",       tags: ["철분", "빈혈", "피로"],          thumbnail: "images/products/prod_iron.jpg",          link: "https://www.instagram.com/p/DVFc6MWD2eM/" }
      ]
    },
    {
      category: "화장품",
      items: [
        { name: "바쿠치올",            tags: ["바쿠치올", "스킨케어", "노화"],  thumbnail: "images/products/prod_bakuchio.jpg",      link: "https://www.instagram.com/p/DU37-AgE9my/" },
        { name: "팜트리 수분진정라인", tags: ["수분", "진정", "화장품"],        thumbnail: "images/products/prod_palmtree.jpg",      link: "https://www.instagram.com/p/DV0UeHOD9Ey/" },
        { name: "VT 리들샷",           tags: ["리들샷", "VT", "피부재생"],      thumbnail: "images/products/prod_ridleshot.jpg",     link: "https://www.instagram.com/p/DT4Ko2rjw_I/" }
      ]
    },
    {
      category: "기타",
      items: [
        { name: "큐로세틴",  tags: ["퀘르세틴", "항산화", "염증"],  thumbnail: "images/products/prod_quercetin.jpg", link: "https://www.instagram.com/p/DUz4sz3D6MR/" },
        { name: "디오스민",  tags: ["디오스민", "붓기", "혈관"],   thumbnail: "images/products/prod_diosmin.jpg",   link: "https://www.instagram.com/p/DUXGFyWjy00/" },
        { name: "루아빌",    tags: ["루테인", "아스타잔틴", "눈"], thumbnail: "images/products/prod_luabill.jpg",   link: "https://www.instagram.com/p/DWVE1g_D2F8/" },
        { name: "이노시톨",  tags: ["PCOS", "호르몬", "여성"],     thumbnail: "images/products/prod_inositol.jpg",  link: "https://www.instagram.com/p/DVaVQR4D3gE/" },
        { name: "아미노콤",  tags: ["아미노산", "근육", "운동"],   thumbnail: "images/products/prod_aminocom.jpg",  link: "https://www.instagram.com/p/DVqPezADyrE/" },
        { name: "멜라코지",  tags: ["멜라토닌", "수면"],           thumbnail: "images/products/prod_melacozy.jpg",  link: "https://www.instagram.com/p/DSmiqUMj8XX/" },
        { name: "베르베린",  tags: ["혈당", "다이어트", "인슐린"], thumbnail: "images/products/prod_berberin.jpg",  link: "https://www.instagram.com/p/DTC4fZXD0q7/" },
        { name: "보라물",    tags: ["안토시아닌", "눈건강"],       thumbnail: "images/products/prod_borawater.jpg", link: "https://www.instagram.com/p/DVnAFGhD6jD/" },
        { name: "생리대",    tags: ["생리대", "여성"],             thumbnail: "images/products/prod_pad.jpg",       link: "https://www.instagram.com/p/DWNJg9BE7hF/" }
      ]
    }
  ],

  // ──────────────────────────────────────────────
  // 섹션 4: 팩폭 시리즈 몰아보기
  // 시리즈별로 그룹 묶기 가능 (group 필드)
  // ──────────────────────────────────────────────
  facpok: [
    // ── 비타민D ──
    { group: "비타민D", title: "비타민D+K2 논란 종결",   tags: ["비타민D","K2","논란"],    thumbnail: "images/facpok/DVI9vVej9B2.jpg", link: "https://www.instagram.com/p/DVI9vVej9B2/" },
    { group: "비타민D", title: "비타민D K2 없어도 될까?", tags: ["비타민D","K2"],           thumbnail: "images/facpok/DOno6QVDzSt.jpg", link: "https://www.instagram.com/p/DOno6QVDzSt/" },
    // ── 오메가3 ──
    { group: "오메가3", title: "오메가3 팩폭 12탄",       tags: ["오메가3","팩폭","혈관"],  thumbnail: "images/facpok/DTxEE7Tj0_U.jpg", link: "https://www.instagram.com/p/DTxEE7Tj0_U/" },
    // ── 유산균 ──
    { group: "유산균", title: "질유산균 팩폭",            tags: ["질유산균","팩폭"],        thumbnail: "images/facpok/DOZzFRej_F6.jpg", link: "https://www.instagram.com/p/DOZzFRej_F6/" },
    { group: "유산균", title: "질유산균 논란 정리",       tags: ["질유산균","논란"],        thumbnail: "images/facpok/DWJkn8KD_fw.jpg", link: "https://www.instagram.com/p/DWJkn8KD_fw/" },
    // ── 영양제 팩폭 ──
    { group: "영양제 팩폭", title: "팩폭 시리즈 안내 & 2025 최악의 영양제", tags: ["팩폭","영양제"],    thumbnail: "images/facpok/DS5tnFtEx-8.jpg", link: "https://www.instagram.com/p/DS5tnFtEx-8/" },
    { group: "영양제 팩폭", title: "알부민 팩폭",          tags: ["알부민","팩폭"],          thumbnail: "images/facpok/DQ0ogvCD8eF.jpg", link: "https://www.instagram.com/p/DQ0ogvCD8eF/" },
    { group: "영양제 팩폭", title: "호갱방지 팩폭타임 8탄", tags: ["호갱방지","팩폭"],       thumbnail: "images/facpok/DQGr97-D2m_.jpg", link: "https://www.instagram.com/p/DQGr97-D2m_/" },
    { group: "영양제 팩폭", title: "호갱방지 팩폭타임",    tags: ["호갱방지","팩폭"],        thumbnail: "images/facpok/DN981i2j1fe.jpg", link: "https://www.instagram.com/p/DN981i2j1fe/" },
    { group: "영양제 팩폭", title: "흡수율 팩폭",          tags: ["흡수율","팩폭"],          thumbnail: "images/facpok/DK2B0Aivu4c.jpg", link: "https://www.instagram.com/p/DK2B0Aivu4c/" },
    // ── 약국 꿀팁 ──
    { group: "약국 꿀팁", title: "약사들만 아는 솔직 꿀팁", tags: ["약국","꿀팁","절약"],   thumbnail: "images/facpok/DUlAQuCjzLz.jpg", link: "https://www.instagram.com/p/DUlAQuCjzLz/" },
    { group: "약국 꿀팁", title: "파란안약 팩폭",          tags: ["안약","눈"],              thumbnail: "images/facpok/DUPswELD2JZ.jpg", link: "https://www.instagram.com/p/DUPswELD2JZ/" },
    { group: "약국 꿀팁", title: "사지마템 5가지",         tags: ["사지마템","약국"],        thumbnail: "images/facpok/DTue1QUj6K8.jpg", link: "https://www.instagram.com/p/DTue1QUj6K8/" },
    { group: "약국 꿀팁", title: "흉터약 점수 매기기",     tags: ["흉터","약국","점수"],     thumbnail: "images/facpok/DVrh4yizzpk.jpg", link: "https://www.instagram.com/p/DVrh4yizzpk/" },
    { group: "약국 꿀팁", title: "피임약 발암물질 논란",   tags: ["피임약","발암"],          thumbnail: "images/facpok/DWSV3rpk7oG.jpg", link: "https://www.instagram.com/p/DWSV3rpk7oG/" },
    { group: "약국 꿀팁", title: "빌베리 영양제 이슈",     tags: ["빌베리","보라물"],        thumbnail: "images/facpok/DVhf_Vwj4cT.jpg", link: "https://www.instagram.com/p/DVhf_Vwj4cT/" }
  ]
};
