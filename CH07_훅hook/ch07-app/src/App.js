// import logo from './logo.svg';
import './App.css';
import UseState01 from './hooks/1_useState/UseState01';
import UseState02 from './hooks/1_useState/UseState02';
import UseState03 from './hooks/1_useState/UseState03';
import UseEffect01 from './hooks/2_useEffect/UseEffect01';
import UseEffect02 from './hooks/2_useEffect/UseEffect02';
import UseEffect03 from './hooks/2_useEffect/UseEffect03';
// import 앞에 들어가는 것은 변수명 같은 역할이고 from 뒤에 적는 경로는 참조 경로이다.
// 변수명과 참조 경로의 파일명이 달라도 상관없지만 보통은 맞춰준다.

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>비트 캠프 수업</p>
        <div>
          <UseState01 />
        </div>
        <br />
        <div>
          <UseState02 />
        </div>
        <br />
        <div>
          <UseState03 />
        </div>
        <br />
        <div>
          <UseEffect01 />
        </div>
        <div>
          <UseEffect02 />
        </div>
        <br />
        <div>
          <UseEffect03 />
        </div>
        <br />
      </header>
    </div>
  );
}

export default App;
