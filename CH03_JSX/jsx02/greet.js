//JSX

// 1. 태그는 무조건 닫혀야한다.
// 2. 두 개 이상의 엘리먼트는 무조건 하나의 엘리먼트로 감싸줘야한다.
// 3. JSX 내부에서 변수를 사용하려면 코드를 { } 로 감싸면된다.
// 4. {} 자바스크립트 if 조건문(X)
//    : 삼항 연산자
class App4 extends React.Component {
  reder() {
    let flag = true;
    <div>
      {
        flag ? <p>안녕</p> : <p>잘가</p>
      }
    </div>
  }
}

// 5. 카멜케이스 표기법
