// import logo from './logo.svg';
import "./App.css";
import UseState01 from "./hooks/1_useState/UseState01";
import UseState02 from "./hooks/1_useState/UseState02";
import UseState03 from "./hooks/1_useState/UseState03";
import UseEffect01 from "./hooks/2_useEffect/UseEffect01";
import UseEffect02 from "./hooks/2_useEffect/UseEffect02";
import UseEffect03 from "./hooks/2_useEffect/UseEffect03";
import UseRef01 from "./hooks/3_useRef/UseRef01";
import UseRef02 from "./hooks/3_useRef/UseRef02";
import UseRef03 from "./hooks/3_useRef/UseRef03";
import UseMemo01 from "./hooks/4_useMemo/UseMemo01";
import UseMemo02 from "./hooks/4_useMemo/UseMemo02";
import UseCallback01 from "./hooks/5_useCallback/UseCallback01";
import UseCallback02 from "./hooks/5_useCallback/UseCallback02";
import UseCallback03 from "./hooks/5_useCallback/UseCallback03";
import UseReducer02 from "./hooks/6_useReducer/UseReducer02";
import UseReducer03 from "./hooks/6_useReducer/UseReducer03";
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
