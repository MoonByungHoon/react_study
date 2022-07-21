// 리엑트는 Java Script 언어를 기본으로 사용한다.
// node.js는 js를 웹이 아닌 윈도우상에서 작동할 수 있게 만든 언어이다.
// 터미널에서 해당 경로 파일을 실행하면 Hello World를 콘솔에서 볼 수 있다.
// $ node ex01_console.js
// consolelas의 경우 한글 지원이 좋지 못하여서 네이버에서 따로 만든 폰트 타입이 있다.(D2 coding)

console.log("Hello World");

// 동적 변수 선언이기 때문에 이런식의 표현이 가능하다.
var a = 10, d = 'a';

console.log(a, d);

// 타입 확인하기
console.log(typeof(d));
console.log("값은" + a + "입니다.");
console.log("값은 %d 입니다.", a);
// 아아