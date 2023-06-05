/* esline-disable */
import './App.css';
import React, { useState } from 'react';

/*
응용1. 글에 아무것도 입력안하고 발행버튼 누르는거 막으려면?
응용2. 글을 하나 추가하면 따봉갯수 개별적용하던 것도 이상해진다..따봉 기록할 곳도 하나 더 만들어야할듯
응용3. 날짜데이터 (글 발행시 보여주~)
*/

function App() {

  //자주 변경될거같은 html 부분은 state로 만들기
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(0);
  let [title, setTitle] = useState([0]);
  let [입력값, 입력값변경] = useState('');

  function 전환(){
    let copy1 = [...글제목]; //...을 이용하여 독립적인 사본
    copy1[0] = '여자 코트 추천';
    글제목변경(copy1);
  }

  function 정렬(){
    let copy2 = [...글제목];
    copy2.sort();
    글제목변경(copy2);
  }
  
  return (
    //JSX : .js 파일에서 쓰는 html 대용품
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      {
        //for문을 쓸 수 없다.. 대신! map()
        글제목.map(function(a, i){  //a : 글제목 , i : index(0,1,2)
          return (
            <div className='list' key={i}>
              <h4 onClick={()=>{  setModal(!modal); setTitle(i)}}>{ 글제목[i] }
                <span onClick={(e)=>{ e.stopPropagation(); let copy3 = [...따봉]; copy3[i] = copy3[i] + 1; 따봉변경(copy3);} }>❤️</span> { 따봉[i] }
                {/* 상위 html로 퍼지는 이벤트버블링을 막고 싶으면 e.stopPropagation() */}
                <button value={i} className="blogDel" onClick={(e) => { e.stopPropagation(); let copy5 = [...글제목]; copy5.splice(i, 1); 글제목변경(copy5)}}>삭제</button>
              </h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }
      <input onChange={(e)=>{ //(정보)state변경함수는 늦게처리됨 다음 소스가 미리 진행됨
        입력값변경(e.target.value);
      }}/>
      <button onClick={() => {let copy4 = [...글제목]; copy4.unshift(입력값); 글제목변경(copy4)}}>글발행</button>
      <Modal2></Modal2>
      {
        //if문을 쓸 수 없다.. 대신! 삼항연산자
        modal == 1 ? <Modal 글제목={ 글제목 } title={ title }/> : null
      }
    </div>
  );
}

//컴포넌트 -> 어떤 때에 사용? 1.반복적인 html 축약할 때
let Modal = (props) => {
  return(
    <div className='modal'>
    <h4>{props.글제목[props.title]}</h4>
    <p>날짜</p>
    <p>상세내용</p>
    <button>글수정</button>
  </div>
  )
}

//옛날 class 문법으로 컴포넌트 만들려면
class Modal2 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name : 'kim',
      age  : 20
    }
  }
  render(){
    return(
      <div>안녕 {this.state.name}
        <button onClick={() => {
          this.setState({name : 'moon'})
        }}>버튼</button>
      </div>
    )
  }
}

export default App;