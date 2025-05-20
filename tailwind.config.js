export default {
  content: [
       "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        // 커스텀 컬러 지정 
        'lb': '#a35f2f',   // 연갈색
        'a-c': '#fdc184',  // 살구색
        'l-y': '#ffe9be',  // 연노랑
        'iv': '#fffbf1',  // 아이보리
        'b-n': '#a35f2f',  // 갈색 (동일 값, 필요시만 중복 정의)
        'g-b': '#3e3a39',  // 연블랙
        'g-y': '#595757',  // 회색
        'header-c': '#5a4227' // 로고 갈색 


      },
    },
    plugins: [],
  }
}