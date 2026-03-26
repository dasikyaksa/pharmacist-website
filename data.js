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
      title: "공구 참여 전 꼭 읽어주세요 ①",
      subtitle: "주문 방법 & 공지사항",
      thumbnail: "https://placehold.co/400x400/FF8FAB/FFFFFF?text=필독+①",  // ← 교체 필요
      link: "https://www.instagram.com/p/PLACEHOLDER1/"                     // ← 교체 필요
    },
    {
      title: "공구 참여 전 꼭 읽어주세요 ②",
      subtitle: "배송 & 환불 안내",
      thumbnail: "https://placehold.co/400x400/FF6B9D/FFFFFF?text=필독+②",
      link: "https://www.instagram.com/p/PLACEHOLDER2/"
    },
    {
      title: "공구 참여 전 꼭 읽어주세요 ③",
      subtitle: "자주 묻는 질문 모음",
      thumbnail: "https://placehold.co/400x400/C2185B/FFFFFF?text=필독+③",
      link: "https://www.instagram.com/p/PLACEHOLDER3/"
    }
  ],

  // ──────────────────────────────────────────────
  // 섹션 2: 공구 일정 캘린더
  // ⚙️ build_calendar.py 를 실행하면 구글캘린더 기반으로 자동 업데이트됩니다.
  // 수동으로도 입력 가능합니다. start/end 형식: "YYYY-MM-DD"
  // ──────────────────────────────────────────────
  calendar: [
    {
      title: "빌베리",
      start: "2026-03-28",
      end: "2026-04-06",
      thumbnail: "https://placehold.co/80x80/FF8FAB/FFFFFF?text=빌베리",
      link: "https://www.instagram.com/p/CAL_PLACEHOLDER1/"
    },
    {
      title: "여성유산균",
      start: "2026-04-01",
      end: "2026-04-10",
      thumbnail: "https://placehold.co/80x80/FF6B9D/FFFFFF?text=여성유산균",
      link: "https://www.instagram.com/p/CAL_PLACEHOLDER2/"
    },
    {
      title: "오메가 미니",
      start: "2026-04-08",
      end: "2026-04-17",
      thumbnail: "https://placehold.co/80x80/F48FB1/FFFFFF?text=오메가미니",
      link: "https://www.instagram.com/p/CAL_PLACEHOLDER3/"
    },
    {
      title: "마그네슘",
      start: "2026-04-15",
      end: "2026-04-24",
      thumbnail: "https://placehold.co/80x80/EC407A/FFFFFF?text=마그네슘",
      link: "https://www.instagram.com/p/CAL_PLACEHOLDER4/"
    },
    {
      title: "베르베린",
      start: "2026-04-22",
      end: "2026-05-01",
      thumbnail: "https://placehold.co/80x80/AD1457/FFFFFF?text=베르베린",
      link: "https://www.instagram.com/p/CAL_PLACEHOLDER5/"
    },
    {
      title: "분홍이",
      start: "2026-05-01",
      end: "2026-05-10",
      thumbnail: "https://placehold.co/80x80/FF80AB/FFFFFF?text=분홍이",
      link: "https://www.instagram.com/p/CAL_PLACEHOLDER6/"
    }
  ],

  // ──────────────────────────────────────────────
  // 섹션 3: 공구제품 사용설명서 몰아보기
  // 제품별 최근 마감이벤트 피드 링크
  // ──────────────────────────────────────────────
  products: [
    {
      name: "빌베리",
      tags: ["루테인", "아스타잔틴", "눈건강"],
      thumbnail: "https://placehold.co/400x400/FFB3C6/FFFFFF?text=빌베리",
      link: "https://www.instagram.com/p/PRODUCT1/"
    },
    {
      name: "여성유산균",
      tags: ["질유산균", "람노퓨어", "여성건강"],
      thumbnail: "https://placehold.co/400x400/FF8FAB/FFFFFF?text=여성유산균",
      link: "https://www.instagram.com/p/PRODUCT2/"
    },
    {
      name: "오메가 미니",
      tags: ["오메가3", "알티지", "혈관"],
      thumbnail: "https://placehold.co/400x400/FF6B9D/FFFFFF?text=오메가미니",
      link: "https://www.instagram.com/p/PRODUCT3/"
    },
    {
      name: "마그네슘",
      tags: ["마그샷", "수면", "근육"],
      thumbnail: "https://placehold.co/400x400/F06292/FFFFFF?text=마그네슘",
      link: "https://www.instagram.com/p/PRODUCT4/"
    },
    {
      name: "베르베린",
      tags: ["혈당", "다이어트", "인슐린"],
      thumbnail: "https://placehold.co/400x400/EC407A/FFFFFF?text=베르베린",
      link: "https://www.instagram.com/p/PRODUCT5/"
    },
    {
      name: "분홍이",
      tags: ["프리미엄유산균", "프로바이오틱스", "장건강"],
      thumbnail: "https://placehold.co/400x400/E91E8C/FFFFFF?text=분홍이",
      link: "https://www.instagram.com/p/PRODUCT6/"
    },
    {
      name: "큐로세틴",
      tags: ["퀘르세틴", "항산화", "염증"],
      thumbnail: "https://placehold.co/400x400/FF4081/FFFFFF?text=큐로세틴",
      link: "https://www.instagram.com/p/PRODUCT7/"
    },
    {
      name: "이노시톨",
      tags: ["PCOS", "호르몬", "여성"],
      thumbnail: "https://placehold.co/400x400/F50057/FFFFFF?text=이노시톨",
      link: "https://www.instagram.com/p/PRODUCT8/"
    },
    {
      name: "디오스민",
      tags: ["붓기", "혈관", "정맥"],
      thumbnail: "https://placehold.co/400x400/FF80AB/FFFFFF?text=디오스민",
      link: "https://www.instagram.com/p/PRODUCT9/"
    },
    {
      name: "비타민D",
      tags: ["뼈건강", "면역", "햇빛"],
      thumbnail: "https://placehold.co/400x400/FFAB91/FFFFFF?text=비타민D",
      link: "https://www.instagram.com/p/PRODUCT10/"
    },
    {
      name: "철분",
      tags: ["빈혈", "피로", "헤모글로빈"],
      thumbnail: "https://placehold.co/400x400/FF7043/FFFFFF?text=철분",
      link: "https://www.instagram.com/p/PRODUCT11/"
    },
    {
      name: "루아빌",
      tags: ["루테인", "아스타잔틴", "눈"],
      thumbnail: "https://placehold.co/400x400/FF8A65/FFFFFF?text=루아빌",
      link: "https://www.instagram.com/p/PRODUCT12/"
    }
  ],

  // ──────────────────────────────────────────────
  // 섹션 4: 팩폭 시리즈 몰아보기
  // 시리즈별로 그룹 묶기 가능 (group 필드)
  // ──────────────────────────────────────────────
  facpok: [
    {
      title: "비타민C 팩폭",
      episode: "1편",
      group: "비타민C",
      tags: ["비타민C", "항산화"],
      thumbnail: "https://placehold.co/400x400/FF8FAB/FFFFFF?text=비타민C+1편",
      link: "https://www.instagram.com/p/FACPOK1/"
    },
    {
      title: "비타민C 팩폭",
      episode: "2편",
      group: "비타민C",
      tags: ["비타민C", "항산화"],
      thumbnail: "https://placehold.co/400x400/FF6B9D/FFFFFF?text=비타민C+2편",
      link: "https://www.instagram.com/p/FACPOK2/"
    },
    {
      title: "비타민C 팩폭",
      episode: "3편",
      group: "비타민C",
      tags: ["비타민C", "항산화"],
      thumbnail: "https://placehold.co/400x400/F06292/FFFFFF?text=비타민C+3편",
      link: "https://www.instagram.com/p/FACPOK3/"
    },
    {
      title: "오메가3 팩폭",
      episode: "1편",
      group: "오메가3",
      tags: ["오메가3", "혈관", "중성지방"],
      thumbnail: "https://placehold.co/400x400/FF80AB/FFFFFF?text=오메가3+1편",
      link: "https://www.instagram.com/p/FACPOK4/"
    },
    {
      title: "오메가3 팩폭",
      episode: "2편",
      group: "오메가3",
      tags: ["오메가3", "혈관"],
      thumbnail: "https://placehold.co/400x400/FF4081/FFFFFF?text=오메가3+2편",
      link: "https://www.instagram.com/p/FACPOK5/"
    },
    {
      title: "유산균 팩폭",
      episode: "1편",
      group: "유산균",
      tags: ["유산균", "장건강", "프로바이오틱스"],
      thumbnail: "https://placehold.co/400x400/E91E8C/FFFFFF?text=유산균+1편",
      link: "https://www.instagram.com/p/FACPOK6/"
    },
    {
      title: "유산균 팩폭",
      episode: "2편",
      group: "유산균",
      tags: ["유산균", "장건강"],
      thumbnail: "https://placehold.co/400x400/C2185B/FFFFFF?text=유산균+2편",
      link: "https://www.instagram.com/p/FACPOK7/"
    },
    {
      title: "마그네슘 팩폭",
      episode: "1편",
      group: "마그네슘",
      tags: ["마그네슘", "수면", "근육이완"],
      thumbnail: "https://placehold.co/400x400/AD1457/FFFFFF?text=마그네슘+1편",
      link: "https://www.instagram.com/p/FACPOK8/"
    }
  ]
};
