import React from "react";
import styled from "styled-components";

// styled-components
//  : css문법을 그대로 사용함.
//    결과물을 스타일링된 컴포넌트 형태로 만들어주는 오픈소스 라이브러리

const Wrapper = styled.div`
  padding: 1em;
  background: crimson;
  border-radius: 50%;
`;

const MyButton = styled.button`
  padding: 1em;
  background-color: white;
  border-radius: 10%;
  margin-top: 20px;
`;

const SmartButton = styled.button`
  color: ${(props) => (props.dark ? "white" : "dark")};
  background: ${(props) => (props.dark ? "black" : "white")};
  border: 1px solid crimson;
  padding: 3px;
`;

function MainPage() {
  return (
    <form>
      <Wrapper>
        <div>MainPage</div>
        <SmartButton dark>Black Button</SmartButton>
      </Wrapper>
    </form>
  );
}

export default MainPage;
