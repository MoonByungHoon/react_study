// import logo from './logo.svg';
import "./App.css";
import Home from "./hooks/8_useContext/Home";
// import 앞에 들어가는 것은 변수명 같은 역할이고 from 뒤에 적는 경로는 참조 경로이다.
// 변수명과 참조 경로의 파일명이 달라도 상관없지만 보통은 맞춰준다.

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Home />
        </div>
      </header>
    </div>
  );
}

export default App;
