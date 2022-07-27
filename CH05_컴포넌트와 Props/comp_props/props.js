//컴포넌트 입력(Props)
//  : 속성
//      읽기 전용.
//      자바스크립트 객체 { }

function App(props) {

  return (
    <Profile name='Tom' intro='안녕' hit={100} />
  );
}

function Profile({ name, intro, hit }) {

  return (
    <>
      <h2>{intro}, {name}의 블로그에 온걸 환영해.</h2>
      <hr />
      <span>방문자{hit}</span>
    </>
  );
}