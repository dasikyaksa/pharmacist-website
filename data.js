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
    photo: "images/profile.png",           // ← 프로필 사진 파일을 images/ 폴더에 넣어주세요
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
        "title": "오메가3 미니",
        "start": "2026-05-01",
        "end": "2026-05-07",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EC%98%A4%EB%A9%94%EA%B0%803%20%EB%AF%B8%EB%8B%88",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "아연",
        "start": "2026-05-07",
        "end": "2026-05-13",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EC%95%84%EC%97%B0",
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
        "title": "씨오레 공구",
        "start": "2026-05-26",
        "end": "2026-06-01",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EC%94%A8%EC%98%A4%EB%A0%88%20%EA%B3%B5%EA%B5%AC",
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
        "title": "큐로세틴&젤리",
        "start": "2026-06-01",
        "end": "2026-06-07",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%ED%81%90%EB%A1%9C%EC%84%B8%ED%8B%B4%26%EC%A0%A4%EB%A6%AC",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "팜트리",
        "start": "2026-06-04",
        "end": "2026-06-10",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%ED%8C%9C%ED%8A%B8%EB%A6%AC",
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
    },
    {
        "title": "피크노제놀",
        "start": "2026-06-25",
        "end": "2026-07-01",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%ED%94%BC%ED%81%AC%EB%85%B8%EC%A0%9C%EB%86%80",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "분홍이",
        "start": "2026-06-29",
        "end": "2026-07-01",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EB%B6%84%ED%99%8D%EC%9D%B4",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "베르베린",
        "start": "2026-07-02",
        "end": "2026-07-08",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EB%B2%A0%EB%A5%B4%EB%B2%A0%EB%A6%B0",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "비타민D",
        "start": "2026-07-07",
        "end": "2026-07-13",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EB%B9%84%ED%83%80%EB%AF%BCD",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "디오스민",
        "start": "2026-07-09",
        "end": "2026-07-15",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EB%94%94%EC%98%A4%EC%8A%A4%EB%AF%BC",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "오메안비려유",
        "start": "2026-07-14",
        "end": "2026-07-20",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EC%98%A4%EB%A9%94%EC%95%88%EB%B9%84%EB%A0%A4%EC%9C%A0",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "철분",
        "start": "2026-07-16",
        "end": "2026-07-22",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EC%B2%A0%EB%B6%84",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "니코틴산아미드",
        "start": "2026-07-21",
        "end": "2026-07-27",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EB%8B%88%EC%BD%94%ED%8B%B4%EC%82%B0%EC%95%84%EB%AF%B8%EB%93%9C",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "노랑이",
        "start": "2026-07-23",
        "end": "2026-07-29",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EB%85%B8%EB%9E%91%EC%9D%B4",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "마그샷",
        "start": "2026-07-28",
        "end": "2026-08-03",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EB%A7%88%EA%B7%B8%EC%83%B7",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "아연",
        "start": "2026-07-30",
        "end": "2026-08-05",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EC%95%84%EC%97%B0",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "루아빌",
        "start": "2026-08-04",
        "end": "2026-08-10",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EB%A3%A8%EC%95%84%EB%B9%8C",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "오메가3 미니",
        "start": "2026-08-06",
        "end": "2026-08-12",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EC%98%A4%EB%A9%94%EA%B0%803%20%EB%AF%B8%EB%8B%88",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "유산균 2종",
        "start": "2026-08-10",
        "end": "2026-08-16",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EC%9C%A0%EC%82%B0%EA%B7%A0%202%EC%A2%85",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "이노시톨",
        "start": "2026-08-13",
        "end": "2026-08-19",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EC%9D%B4%EB%85%B8%EC%8B%9C%ED%86%A8",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "바쿠치올",
        "start": "2026-08-18",
        "end": "2026-08-24",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EB%B0%94%EC%BF%A0%EC%B9%98%EC%98%AC",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "퓨어 알티지 오메가3",
        "start": "2026-08-20",
        "end": "2026-08-26",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%ED%93%A8%EC%96%B4%20%EC%95%8C%ED%8B%B0%EC%A7%80%20%EC%98%A4%EB%A9%94%EA%B0%803",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "(제안) 노랑이",
        "start": "2026-08-24",
        "end": "2026-08-30",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%28%EC%A0%9C%EC%95%88%29%20%EB%85%B8%EB%9E%91%EC%9D%B4",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "트루엔 트리플 마그네슘",
        "start": "2026-08-25",
        "end": "2026-08-31",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%ED%8A%B8%EB%A3%A8%EC%97%94%20%ED%8A%B8%EB%A6%AC%ED%94%8C%20%EB%A7%88%EA%B7%B8%EB%84%A4%EC%8A%98",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "씨오레 화장품",
        "start": "2026-08-25",
        "end": "2026-08-31",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EC%94%A8%EC%98%A4%EB%A0%88%20%ED%99%94%EC%9E%A5%ED%92%88",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "큐로세틴",
        "start": "2026-08-27",
        "end": "2026-09-02",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%ED%81%90%EB%A1%9C%EC%84%B8%ED%8B%B4",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "(제안) 칼마디K2",
        "start": "2026-08-30",
        "end": "2026-09-05",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%28%EC%A0%9C%EC%95%88%29%20%EC%B9%BC%EB%A7%88%EB%94%94K2",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "이약 연차 3-5",
        "start": "2026-09-02",
        "end": "2026-09-04",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%EC%9D%B4%EC%95%BD%20%EC%97%B0%EC%B0%A8%203-5",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "(제안) 비타민D",
        "start": "2026-09-04",
        "end": "2026-09-10",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%28%EC%A0%9C%EC%95%88%29%20%EB%B9%84%ED%83%80%EB%AF%BCD",
        "link": "https://www.instagram.com/pharm_baksoyun/"
    },
    {
        "title": "(제안) 보라물",
        "start": "2026-09-07",
        "end": "2026-09-13",
        "thumbnail": "https://placehold.co/80x80/ffc2c2/FFFFFF?text=%28%EC%A0%9C%EC%95%88%29%20%EB%B3%B4%EB%9D%BC%EB%AC%BC",
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
        { name: "비타민D",     tags: ["비타민D", "면역", "뼈건강"],     thumbnail: "images/products/prod_vitd.jpg",              link: "https://www.instagram.com/p/DW_BXQSj17a/" },
        { name: "오늘도 맑아연", tags: ["여드름", "피부", "영양제"],      thumbnail: "images/products/prod_acne.jpg",              link: "https://www.instagram.com/p/DYGVMgIlPPE/?img_index=1" }
      ]
    },
    {
      category: "오메가3",
      items: [
        { name: "오메안비려유",    tags: ["오메가3", "알티지", "혈관"],  thumbnail: "images/products/prod_omegabig.jpg",          link: "https://www.instagram.com/p/DXotGtwD_uq/?img_index=1" },
        { name: "오메가미니",      tags: ["오메가3", "소형", "혈관"],    thumbnail: "images/products/prod_omega_shared.jpg", link: "https://www.instagram.com/p/DUmLGgHE16J/" },
        { name: "오메츄",          tags: ["오메가3", "젤리", "어린이"],  thumbnail: "images/products/prod_omegachew.jpg",         link: "https://www.instagram.com/p/DZLn_KOAcNW/" },
        { name: "필더데이 오메가", tags: ["오메가3", "필더데이"],        thumbnail: "images/products/prod_omega_shared.jpg", link: "https://www.instagram.com/p/DUmLGgHE16J/" }
      ]
    },
    {
      category: "유산균",
      items: [
        { name: "분홍이",    tags: ["유산균", "프로바이오틱스", "장건강"], thumbnail: "images/products/prod_pink.jpg",             link: "https://www.instagram.com/p/DYTN9hMmBq5/" },
        { name: "초록이",    tags: ["유산균", "프리바이오틱스"],           thumbnail: "images/products/prod_green.jpg",             link: "https://www.instagram.com/p/DYTN9hMmBq5/" },
        { name: "노랑이",    tags: ["유산균", "장건강"],                   thumbnail: "images/products/prod_yellow.jpg",             link: "https://www.instagram.com/p/DYTN9hMmBq5/" },
        { name: "여성유산균", tags: ["유산균", "질유산균", "여성건강"],   thumbnail: "images/products/prod_femlab.jpg",            link: "https://www.instagram.com/p/DWIPE6ijweB/" }
      ]
    },
    {
      category: "미네랄",
      items: [
        { name: "마그샷",              tags: ["마그네슘", "수면", "근육"],      thumbnail: "images/products/prod_magshot.jpg",       link: "https://www.instagram.com/p/DXNpTA6D9AX/" },
        { name: "갓성비 산화마그네슘", tags: ["마그네슘", "변비", "갓성비"],   thumbnail: "images/products/prod_magox.jpg",         link: "https://www.instagram.com/p/DUfLcSKj-e0/" },
        { name: "칼마디K2",            tags: ["칼슘", "마그네슘", "비타민K2"], thumbnail: "images/products/prod_calmadi.jpg",       link: "https://www.instagram.com/p/DX5ghDxGjjY/" },
        { name: "풍선껌맛 철분",       tags: ["철분", "빈혈", "피로"],          thumbnail: "images/products/prod_iron.jpg",          link: "https://www.instagram.com/p/DVFc6MWD2eM/" }
      ]
    },
    {
      category: "화장품",
      items: [
        { name: "바쿠치올",            tags: ["바쿠치올", "스킨케어", "노화"],  thumbnail: "images/products/prod_bakuchio.jpg",      link: "https://www.instagram.com/p/DY8SDrgDX77/" },
        { name: "팜트리 수분진정라인", tags: ["수분", "진정", "화장품"],        thumbnail: "images/products/prod_palmtree.jpg",      link: "https://www.instagram.com/p/DY-6JJpD8o8/" },
        { name: "VT 리들샷",           tags: ["리들샷", "VT", "피부재생"],      thumbnail: "images/products/prod_ridleshot.jpg",     link: "https://www.instagram.com/p/DT4Ko2rjw_I/" }
      ]
    },
    {
      category: "기타",
      items: [
        { name: "큐로세틴",  tags: ["퀘르세틴", "항산화", "염증"],  thumbnail: "images/products/prod_quercetin.jpg", link: "https://www.instagram.com/p/DWtdmBmj2gk/" },
        { name: "디오스민",  tags: ["디오스민", "붓기", "혈관"],   thumbnail: "images/products/prod_diosmin.jpg",   link: "https://www.instagram.com/p/DXy11pIj6Z4/" },
        { name: "루아빌",    tags: ["루테인", "아스타잔틴", "눈"], thumbnail: "images/products/prod_luabill.jpg",   link: "https://www.instagram.com/p/DWVE1g_D2F8/" },
        { name: "이노시톨",  tags: ["PCOS", "호르몬", "여성"],     thumbnail: "images/products/prod_inositol.jpg",  link: "https://www.instagram.com/p/DYqXWxciEL8/" },
        { name: "아미노콤",  tags: ["아미노산", "근육", "운동"],   thumbnail: "images/products/prod_aminocom.jpg",  link: "https://www.instagram.com/p/DZlnrtimLHW/" },
        { name: "멜라코지",  tags: ["멜라토닌", "수면"],           thumbnail: "images/products/prod_melacozy.jpg",  link: "https://www.instagram.com/p/DSmiqUMj8XX/" },
        { name: "베르베린",  tags: ["혈당", "다이어트", "인슐린"], thumbnail: "images/products/prod_berberin.jpg",  link: "https://www.instagram.com/p/DXjpo8aD5Ws/" },
        { name: "보라물",    tags: ["안토시아닌", "눈건강"],       thumbnail: "images/products/prod_borawater.jpg", link: "https://www.instagram.com/p/DVnAFGhD6jD/" },
        { name: "생리대",    tags: ["생리대", "여성"],             thumbnail: "images/products/prod_pad.jpg",       link: "https://www.instagram.com/p/DWWY9FPD06J/" }
      ]
    }
  ],

  // ──────────────────────────────────────────────
  // 섹션 4: 팩폭 시리즈 몰아보기
  // 시리즈별로 그룹 묶기 가능 (group 필드)
  // ──────────────────────────────────────────────
  facpok: [
    // ── 비타민D ──
    { group: "비타민D", title: "비타민D+K2 논란 종결",    tags: ["비타민D","K2","논란"],   thumbnail: "images/facpok/DVI9vVej9B2.jpg", link: "https://www.instagram.com/p/DVI9vVej9B2/" },
    { group: "비타민D", title: "비타민D K2 없어도 될까?", tags: ["비타민D","K2"],          thumbnail: "images/facpok/DOno6QVDzSt.jpg", link: "https://www.instagram.com/p/DOno6QVDzSt/" },
    { group: "비타민D", title: "팩폭타임 13탄 — 비타민D 꿀팁", tags: ["비타민D","꿀팁"],   thumbnail: "images/facpok/DUDcue6D4Ha.jpg", link: "https://www.instagram.com/p/DUDcue6D4Ha/" },
    // ── 오메가3 ──
    { group: "오메가3", title: "오메가3 팩폭 12탄",        tags: ["오메가3","팩폭","혈관"], thumbnail: "images/facpok/DTxEE7Tj0_U.jpg", link: "https://www.instagram.com/p/DTxEE7Tj0_U/" },
    { group: "오메가3", title: "오메가3 하나만 골라달라",   tags: ["오메가3","추천"],        thumbnail: "images/facpok/DGN2xplPJnz.jpg", link: "https://www.instagram.com/p/DGN2xplPJnz/" },
    // ── 유산균 ──
    { group: "유산균", title: "질유산균 팩폭",             tags: ["질유산균","팩폭"],       thumbnail: "images/facpok/DOZzFRej_F6.jpg", link: "https://www.instagram.com/p/DOZzFRej_F6/" },
    { group: "유산균", title: "질유산균 논란 정리",        tags: ["질유산균","논란"],       thumbnail: "images/facpok/DWJkn8KD_fw.jpg", link: "https://www.instagram.com/p/DWJkn8KD_fw/" },
    { group: "유산균", title: "질유산균 여자 필수 아닙니다", tags: ["질유산균","필수"],     thumbnail: "images/facpok/DSUZ-v1j-kg.jpg", link: "https://www.instagram.com/p/DSUZ-v1j-kg/" },
    { group: "유산균", title: "00유산균 효과 논문 정리",   tags: ["유산균","논문","효과"],  thumbnail: "images/facpok/DVM0h1EE9uQ.jpg", link: "https://www.instagram.com/p/DVM0h1EE9uQ/" },
    // ── 영양제 팩폭 ──
    { group: "영양제 팩폭", title: "팩폭 시리즈 안내 & 2025 최악의 영양제", tags: ["팩폭","영양제"], thumbnail: "images/facpok/DS5tnFtEx-8.jpg", link: "https://www.instagram.com/p/DS5tnFtEx-8/" },
    { group: "영양제 팩폭", title: "팩폭타임 16탄 — 약국입점 영양제",      tags: ["팩폭","약국"],   thumbnail: "images/facpok/DVYc3_Hj6de.jpg", link: "https://www.instagram.com/p/DVYc3_Hj6de/" },
    { group: "영양제 팩폭", title: "알부민 팩폭",           tags: ["알부민","팩폭"],         thumbnail: "images/facpok/DQ0ogvCD8eF.jpg", link: "https://www.instagram.com/p/DQ0ogvCD8eF/" },
    { group: "영양제 팩폭", title: "호갱방지 팩폭 9탄",     tags: ["호갱방지","흡수율"],     thumbnail: "images/facpok/DQd_AvKj4qm.jpg", link: "https://www.instagram.com/p/DQd_AvKj4qm/" },
    { group: "영양제 팩폭", title: "호갱방지 팩폭타임",     tags: ["호갱방지","팩폭"],       thumbnail: "images/facpok/DN981i2j1fe.jpg", link: "https://www.instagram.com/p/DN981i2j1fe/" },
    { group: "영양제 팩폭", title: "흡수율 팩폭",           tags: ["흡수율","팩폭"],         thumbnail: "images/facpok/DK2B0Aivu4c.jpg", link: "https://www.instagram.com/p/DK2B0Aivu4c/" },
    { group: "영양제 팩폭", title: "사지마템 5가지",        tags: ["사지마템","약국"],       thumbnail: "images/facpok/DTue1QUj6K8.jpg", link: "https://www.instagram.com/p/DTue1QUj6K8/" },
    { group: "영양제 팩폭", title: "빌베리 영양제 이슈",    tags: ["빌베리","보라물"],       thumbnail: "images/facpok/DVhf_Vwj4cT.jpg", link: "https://www.instagram.com/p/DVhf_Vwj4cT/" },
    // ── 약국 꿀팁 ──
    { group: "약국 꿀팁", title: "약사들만 아는 솔직 꿀팁", tags: ["약국","꿀팁","절약"],   thumbnail: "images/facpok/DUlAQuCjzLz.jpg", link: "https://www.instagram.com/p/DUlAQuCjzLz/" },
    { group: "약국 꿀팁", title: "흉터약 점수 매기기",      tags: ["흉터","약국","점수"],    thumbnail: "images/facpok/DVrh4yizzpk.jpg", link: "https://www.instagram.com/p/DVrh4yizzpk/" },
    { group: "약국 꿀팁", title: "피임약 발암물질 논란",    tags: ["피임약","발암"],         thumbnail: "images/facpok/DWSV3rpk7oG.jpg", link: "https://www.instagram.com/p/DWSV3rpk7oG/" },
    // ── 기타 ──
    { group: "기타", title: "파란안약 팩폭",           tags: ["안약","눈"],             thumbnail: "images/facpok/DUPswELD2JZ.jpg", link: "https://www.instagram.com/p/DUPswELD2JZ/" },
    { group: "기타", title: "호갱방지 팩폭타임 8탄",   tags: ["호갱방지","팩폭"],       thumbnail: "images/facpok/DQGr97-D2m_.jpg", link: "https://www.instagram.com/p/DQGr97-D2m_/" },

    { group: "팩폭", title: "🙋🏻‍♀️팩폭 정리본 요청이 어제만 3000건이었습니다", tags: ["팩폭"], thumbnail: "images/facpok/DFDQ0NdvyaH.jpg", link: "https://www.instagram.com/reel/DFDQ0NdvyaH/" },
    { group: "팩폭", title: "[약학다식 팩폭 연구소] 오픈합니다", tags: ["팩폭"], thumbnail: "images/facpok/DTuJ0UmjyTz.jpg", link: "https://www.instagram.com/p/DTuJ0UmjyTz/" },
    { group: "팩폭", title: "빌베리 영양제 이슈있는거 아니냐는", tags: ["팩폭"], thumbnail: "images/facpok/DVZnhDWkzUr.jpg", link: "https://www.instagram.com/p/DVZnhDWkzUr/" },
    { group: "팩폭", title: "👩🏻‍⚕️약사가 분석해드립니다!", tags: ["팩폭"], thumbnail: "images/facpok/DWgR1pLj-DU.jpg", link: "https://www.instagram.com/p/DWgR1pLj-DU/" },
    { group: "팩폭", title: "약사의 빨간통 “알약” 팩폭 분석입니다!!", tags: ["팩폭"], thumbnail: "images/facpok/DWpudFTiZ45.jpg", link: "https://www.instagram.com/reel/DWpudFTiZ45/" },
    { group: "팩폭", title: "약사의 팩폭리뷰 4탄 : 샐러드캔디!", tags: ["팩폭"], thumbnail: "images/facpok/DW8Sa5SD2_P.jpg", link: "https://www.instagram.com/reel/DW8Sa5SD2_P/" },
    { group: "팩폭", title: "👩🏻‍⚕️박사과정 약사의 팩폭리뷰 5탄. 오쏘몰 이뮨", tags: ["팩폭"], thumbnail: "images/facpok/DXDje1fD0lI.jpg", link: "https://www.instagram.com/reel/DXDje1fD0lI/" },
    { group: "팩폭", title: "🙋🏻‍♀️약사의 영양제 팩폭리뷰", tags: ["팩폭"], thumbnail: "images/facpok/DXIXDg2j-RW.jpg", link: "https://www.instagram.com/p/DXIXDg2j-RW/" },
    { group: "팩폭", title: "혈당영양제 팩폭 점수!", tags: ["팩폭"], thumbnail: "images/facpok/DXJRljnD4vr.jpg", link: "https://www.instagram.com/reel/DXJRljnD4vr/" },
    { group: "팩폭", title: "혈당 영양제 점수 🙋🏻‍♀️릴스 내용 피드로 동일하게 정리해 올려드립니다", tags: ["팩폭"], thumbnail: "images/facpok/DXJ3iO9j8Ek.jpg", link: "https://www.instagram.com/p/DXJ3iO9j8Ek/" },
    { group: "팩폭", title: "노즈픽션 팩폭리뷰!!", tags: ["팩폭"], thumbnail: "images/facpok/DXWkpLRD-Qb.jpg", link: "https://www.instagram.com/reel/DXWkpLRD-Qb/" },
    { group: "팩폭", title: "이번 주 올라갔던 팩폭리뷰 릴스 모음집!", tags: ["팩폭"], thumbnail: "images/facpok/DXduXfuj8ZZ.jpg", link: "https://www.instagram.com/p/DXduXfuj8ZZ/" },
    { group: "팩폭", title: "유한양행 비타민C! 약사의 팩폭리뷰 영양제 7탄", tags: ["팩폭"], thumbnail: "images/facpok/DXsd2RQjyvV.jpg", link: "https://www.instagram.com/reel/DXsd2RQjyvV/" },
    { group: "팩폭", title: "약사가 팩폭리뷰하는 영양제", tags: ["팩폭"], thumbnail: "images/facpok/DXy_gh8vLOK.jpg", link: "https://www.instagram.com/reel/DXy_gh8vLOK/" },
    { group: "팩폭", title: "팩폭리뷰 릴스 모음집!", tags: ["팩폭"], thumbnail: "images/facpok/DYCHDb-GOT1.jpg", link: "https://www.instagram.com/p/DYCHDb-GOT1/" },
    { group: "팩폭", title: "간혹 저에대해 오해하시는게", tags: ["팩폭"], thumbnail: "images/facpok/DYEVbDdCl3E.jpg", link: "https://www.instagram.com/p/DYEVbDdCl3E/" }

  ],

  // ──────────────────────────────────────────────
  // 정리본 모음집 (노션 연동 — 매주 월요일 자동 업데이트)
  // ──────────────────────────────────────────────
  jeongli: {
    "notionUrl": "https://www.notion.so/35413b2c9ebf43d190e17a3777816625",
    "categories": [
        {
            "title": "베르베린 정리본",
            "items": [
                {
                    "title": "15. 베르베린 정리본 ",
                    "url": "https://www.notion.so/1b1bce0c6ea2802692c5c6130c5a50f9"
                }
            ]
        },
        {
            "title": "피부 관련",
            "groups": [
                {
                    "subtitle": "공구 화장품",
                    "items": [
                        {
                            "title": "1. 바쿠치올 형광등템 구매자 필독 페이지",
                            "url": "https://www.notion.so/167bce0c6ea2805ba20fc8a3906ee965"
                        },
                        {
                            "title": "2. VT 리들샷 링크 & 구매자 필독 페이지",
                            "url": "https://www.notion.so/2eebce0c6ea28062af9ce45d122d2277"
                        },
                        {
                            "title": "3. [수분+진정]팜트리 순한 라인 공동구매",
                            "url": "https://www.notion.so/23abce0c6ea280d898add8bfd3555589"
                        }
                    ]
                },
                {
                    "subtitle": "여드름",
                    "items": [
                        {
                            "title": "5. 여드름 났을 때",
                            "url": "https://www.notion.so/14ebce0c6ea2803f8657ed44aca52c3f"
                        },
                        {
                            "title": "6. 여드름 짠 후 관리",
                            "url": "https://www.notion.so/14ebce0c6ea280b4b543c83cac7adc26"
                        },
                        {
                            "title": "7. 여드름 영양제",
                            "url": "https://www.notion.so/14ebce0c6ea280ef8623d5610dddef90"
                        },
                        {
                            "title": "8. 여드름 패치 리얼 후기",
                            "url": "https://www.notion.so/2f5bce0c6ea28019b2fce30e4ab088eb"
                        }
                    ]
                },
                {
                    "subtitle": "기타",
                    "items": [
                        {
                            "title": "10. 올바른 세안 법",
                            "url": "https://www.notion.so/14ebce0c6ea280c5a2e6d0c72e0a62a0"
                        },
                        {
                            "title": "11. 피부 망치는 생활습관 + 필요한 생활습관 (업데이트 중)",
                            "url": "https://www.notion.so/14ebce0c6ea28072ae64e9a32f0dfb03"
                        },
                        {
                            "title": "12. 모공 정리본!",
                            "url": "https://www.notion.so/106bce0c6ea280d48284d65b87c818e0"
                        },
                        {
                            "title": "13. 신체 부위 별 색소침착 정리본!",
                            "url": "https://www.notion.so/12cbce0c6ea280d89518c6ad70e97b3a"
                        },
                        {
                            "title": "14. 선크림 고르는 법",
                            "url": "https://www.notion.so/14ebce0c6ea2808887c6d21cedd055f6"
                        }
                    ]
                }
            ]
        },
        {
            "title": "혈당/혈압/고지혈 관련",
            "items": [
                {
                    "title": "15. 베르베린 정리본 (1)",
                    "url": "https://www.notion.so/347bce0c6ea2805b918ffe9f5df776f1"
                },
                {
                    "title": "16. 혈당 영양제 팩폭 정리",
                    "url": "https://www.notion.so/343bce0c6ea280c5bea4e5ad23457dd3"
                },
                {
                    "title": "17. 혈압 영양제 팩폭 논문 정리",
                    "url": "https://www.notion.so/348bce0c6ea280aea3b7d7592144ab1a"
                },
                {
                    "title": "18. 고지혈 영양제 논문 팩트 정리",
                    "url": "https://www.notion.so/348bce0c6ea2801cb4b4e39446f4a084"
                }
            ]
        },
        {
            "title": "눈 관련",
            "items": [
                {
                    "title": "20. 루아빌 섭취법 및 주의사항",
                    "url": "https://www.notion.so/1ffbce0c6ea280af9be5ee90c82f3b9a"
                },
                {
                    "title": "21. 눈영양제 고르는 법",
                    "url": "https://www.notion.so/1ffbce0c6ea280178f07dcd247b74535"
                },
                {
                    "title": "22. 슈퍼 베리 4종 데이터 정리",
                    "url": "https://www.notion.so/250bce0c6ea2805ebd4bc5ad551fa8f7"
                }
            ]
        },
        {
            "title": "여성 관련",
            "items": [
                {
                    "title": "30. 임신 준비& 중 & 후 영양제 정리본",
                    "url": "https://www.notion.so/17bbce0c6ea28064855bc6861bcab361"
                },
                {
                    "title": "31. 생리전증후군, 생리통 정리본!",
                    "url": "https://www.notion.so/119bce0c6ea2809db916fe032efaf1ef"
                },
                {
                    "title": "32. 생리대 정리본_업데이트 버전",
                    "url": "https://www.notion.so/1ffbce0c6ea28044bd6edf9dcd31a8d4"
                },
                {
                    "title": "33. 이노시톨 정리본",
                    "url": "https://www.notion.so/1f7bce0c6ea280f79610e1dab20b9d8b"
                }
            ]
        },
        {
            "title": "기타 관련",
            "items": [
                {
                    "title": "40. 부기 정리본!",
                    "url": "https://www.notion.so/106bce0c6ea28059baa5c90e76fc0a13"
                },
                {
                    "title": "41. 위고비 vs 마운자로 vs 삭센다 비교해보기!",
                    "url": "https://www.notion.so/28dbce0c6ea28030b70de4eb22166269"
                },
                {
                    "title": "42. 다이어트 제품들 논문 팩트 정리",
                    "url": "https://www.notion.so/17abce0c6ea280ed9c36fc4f40f14b63"
                },
                {
                    "title": "43. 키 성장 영양제 정리본",
                    "url": "https://www.notion.so/220bce0c6ea2807cba5bd6faeb9779c3"
                },
                {
                    "title": "44. 성인 집중력 영양제!?",
                    "url": "https://www.notion.so/1f7bce0c6ea280199774e1e030684c3c"
                },
                {
                    "title": "45. 커큐민🥘 원료사별 흡수율과 제품",
                    "url": "https://www.notion.so/1e8bce0c6ea280b391d6c4926052eabe"
                },
                {
                    "title": "46. 탈모 영양제 종결",
                    "url": "https://www.notion.so/30ebce0c6ea2800b8cd0d0ab1e2b578e"
                },
                {
                    "title": "47. 면역 정리본",
                    "url": "https://www.notion.so/2ffbce0c6ea280998af9c497ad3decdd"
                },
                {
                    "title": "48. 여름 꿀템 정리본",
                    "url": "https://www.notion.so/357bce0c6ea280678bd0f0ee10961f27"
                }
            ]
        },
        {
            "title": "박약다식 추천템 리스트",
            "items": [
                {
                    "title": "50. [유산균] 추천리스트",
                    "url": "https://www.notion.so/2e8bce0c6ea28058b504e867d8c16268"
                },
                {
                    "title": "51. [오메가3] 리스트 정리본",
                    "url": "https://www.notion.so/2e3bce0c6ea280d6bd40c8f6b37f4e9f"
                },
                {
                    "title": "52. 4세대 오메가3 팩폭 정리본",
                    "url": "https://www.notion.so/2f1bce0c6ea280d6b03ec3b65c138893"
                },
                {
                    "title": "✔️53. 종합비타민 추천리스트",
                    "url": "https://www.instagram.com/p/DVk4AhJD3Vb/?img_index=1"
                }
            ]
        }
    ]
}

};
