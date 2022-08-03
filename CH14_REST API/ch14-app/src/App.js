import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import axios from "axios";

// JS에서 비동기 HTTP 통신
// ajax(JQuery), fetch(최근에는 사용이 적음), axios(최근 가장 사용이 많음)

// 비동기 통신이란 웹페이지를 리로드하지 않고 데이터를 불러오는 방식이다.
// 서버에 데이터를 요청한 후 멈춰있는 것이 아닌 프로그램의 가동은 유지되는 것이다.App

// 장점 : 웹페이지 속도가 향상됨.
//        서버의 처리가 완료될 때까지 기다리지 않고 처리가 가능함.
//        서버에서 Data만 전송하면 되므로 코딩의 양이 줄어듬.

// 단점 : 히스토리 관리가 안됨. (페이지 단위가 아니라서 그런듯.)
//        페이지 이동없는 통신으로 인한 보안상 문제를 야기할 수 있음.
//        연속으로 데이터를 요청하게 되면 서버에 부하를 야기.

// 스프링에서 히동기를 처리할 때에 사용 하는 어노테이션
// 1. @RequestBody
// 2. @ResponseBody

// REST API
// (Representational State Transfer)
// 두 컴퓨터 시스템이 인터넷을 통해 정보를 교환하기 위해 사용하는 인터페이스이다.
// HTTP Method : GET, POST, PUT, DELETE

// 외부 라이브러리를 가져와서 사용하는 방식은 2가지가 있다.
// 1. NPM(직접 다운로드해서 사용하는 방식) [npmjs.com]
// 2. CDN(링크를 가져와서 사용하는 방식) [cdnjs.com]

// 여기서는 npmjs.com에 가서 axios를 검색 후 가장 상단에 있는 자료를 가져와서 node_modules에 설치한다.

// API 테스트 도구인 Postman 설치.
// Postman을 사용하는 이유는 프론트나 백에서 개발 단계중에 서로의 데이터 통신이 원활하지 않을때에
// Postman을 활용하여서 손쉽게 테스트를 할 수 있다.

// JSON Placeholder
// 여러가지 가상의 데이터 기본 리소스를 제공한다.
// 이를 활용하여서 손쉽게 API테스트를 할 수 있다.

const MyImg = styled.img`
  width: 50px;
  border-radius: 50%;
  height: 50px;
`;

function App() {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: "https://jsonplaceholder.typicode.com/photos",
  //   }).then((response) => {
  //     setPosts(response.data);
  //   });
  // }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/photos",
    })
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="d-flex" style={{ alignItems: "center" }}>
          <img
            src="logo192.png"
            alt=""
            style={{ width: 100, height: 100, borderRadius: 100 }}
          />
          <div className="d-flex">
            <input className="form-control ml-3" />
            <button className="btn btn-danger ml-1">Search</button>
          </div>
        </div>
        <div className="container">
          <span style={{ color: "#999" }}> {`Total : ${posts.length}`}</span>
          <hr />
          <table className="table text-light">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">ID</th>
                <th scope="col">TITLE</th>
                <th scope="col">URL</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, idx) => {
                return (
                  <tr key={idx}>
                    <th scope="row">{post.id}</th>
                    <td>
                      <MyImg src={post.thumbnailUrl} alt="" />
                    </td>
                    <td>{post.title}</td>
                    <td>{post.url}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;
