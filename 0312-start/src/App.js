// import logo from './logo.svg';
import './App.css';
// import { useState } from 'react';
import React, { Component } from 'react';

function App() {
  const name = "code";
  const styles = {
    color: 'blue',
    fontSize: '12px',
    backgroundColor: 'yellow',
  }
  return (
    
    <div className="APP">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/** JSX 문법 특징
       * 하나로 감싸인 요소 : 부모요소로 감싸고 있지 않으면 에러가 남, 그래서 항상 태그를 쓰는 것은 아니고, 아무 뜻이 없는 <></>를 사용하기도 한다.
      */}
      <div>{name} 안녕</div>
      <div style={styles}>{name === "code" ? "안녕하세요?" : "누구신가요?"} </div>
      <div style={{
        color: "orange",
        background: "skyblue",
        fontSize: "30px"
      }}>{name === "code" ? "안녕하세요?" : "누구신가요?"} </div>
      {/** style 속성
      - 리액트에 dom 요소 적용시에는 string 을 사용하면 X, 객체를 사용해야 한다.
      - 스타일 속성명은 camelCase로 써야 한다. (하이픈 안됌) 자바스크립트랑 똑같음 ex. background-color => backgroundColor
     */}
     {/** 
      * - 기존에 사용하더 class 속성은 className 속성으로 변경한다.
      * - 종료 태그가 없는 태그도 닫아줘야 함 : <br><br/> 또는 selfclosing 방법 <br />
      * - 주석 외부(=return 바깥)와 내부(=return 안) 작성법이 다름. 외부는 그냥 //만, 내부는 {}로 감싸서
      */}
     <div></div>
     {/* <div class="MyAnimall"> */}
        
     {/* </div> */}
    </div>
    
  );
}

// export default App;

class MyAnimall extends Component {
  render(){
    const animalName = "커크";
    const animalType = "사모예드"
    const sytles = {
      textDecoration: "underline",
    }
  return(
    <div className='MyAnimall'>
      <p>반려 동물의 이름은 <span style={sytles}>{animalName}</span>입니다.</p>
      <p><span style={sytles}>{animalName}</span>은 <span style={sytles}>{animalType}</span>입니다.</p>
    </div>
  )
}
}

function Login(){
  const title = "Welcom to React World"
  return(
    <div className='Login'>
      <h1>{title}</h1>
      <p>아이디: <input type='text' className='id'></input></p>
      <p>비밀번호: <input type='password' className='pw'></input></p>
    </div>
  )
} 

export {MyAnimall, Login};

// function ABCompare(){
//   const a = 10;
//   const b = 4;
//   return (
//     <div className='IsTrue'>
//       <p >{ a > b && "a가 b보다 더 큽니다."}</p>
//   )
// }

// export default ABCompare;

// function Login(){
//   const title = "Hello World"
//   return(
//     <div className='Login'>
//       <h1>{title}</h1>
//       <p>아이디: <input type='text' className='id'></input></p>
//       <p>비밀번호: <input type='password' className='pw'></input></p>
//     </div>
//   )
// }

// export default Login;



//여러 함수를 한번에 정의하면 애러가 난다.
// Line 5:10:   'App' is defined but never used      no-unused-vars
// Line 57:10:  'Animall' is defined but never used  no-unused-vars
// Line 71:10:  'True' is defined but never used     no-unused-vars