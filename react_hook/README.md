Hooks 를 test하기 위해 다른 공간에서의 작업 :  codesandbox.io 에서 코딩 가능.

Hooks :  functional component에서도 state를 사용할 수 있다.  즉, class component, render, didMount 등을 사용하지 않아도 되고,  함수형 프로그래밍이 가능하다.

(-) class component :
   state 를 선언해두고,  this.state, this.setState, current 로 DidMount(), render() 등에 사용.


import React, { Component, useState } from "react";

1. useState는  2가지를 반환,   state와 setState 를 반환
:  const [count, setCount ] = useState(0);   //count 가 this.state   setCount가  this.setState

2. useInput

3. useTabs  
   useState 는 re-render해주는 것  -> Tab을 바꿀 때 re-render해줄 수 있음.

--------------------------------------
useEffect   ~~   componentDidMount ~ componentWillUnmount componentWillUpdate 등등과 비슷함
  params 2개   1.  Effect   2. dependency : effect가 실행되는 조건   cf)   []  전달 시 실행 X

     

1. componentDidMount 역할을 해서 클릭하면 실행되는 함수 역할 가능.
  
  useTitle : titleUpdater를 이용하여 //using componentDidMount,   componentWillUpdate
 
  useRef : getElementById 처럼 어떤 것을 선택 하는 것.

  useClick :  element를 click했을 때, 
           즉, useRef를 같이 사용하여 구현  
           여기서 useEffect를 사용한 것은 element가 있는지 확인 하는 작업
             * useEffect는 componentDidMount에서 동작한다.  =>   componentWillUnmount 에 대한 작업을 해주어야 함
                -> return () => { }  // componentWillUnmount에 의해 호출 될 것.
            dependency가 없으면  willUpdate & 매번 계속  //   있으면  DIdMount

          ==  DidMount,  WillUpdate,  WillUnmount 를 선택해서 구현할 수 있다.
  useClick == useHover  :  event만 다를 뿐

  use PreventLeave & useConfirm 은  useEffect와 useState를 사용 하지 않는다.
  
 useConfirm  :  브라우저의 메시지를 통해 작업을 실행하기 전 확인.
  cf ) 함수형 프로그래밍 이해 
     1. const useConfirm = (message = "", callback, rejection) => {
              if(typeof callback !== "function"){     // function인지 확인.  없어도 되지만 있는게 좋음.
                  return;
               }
     2. const confirmAction = ()=>{
    if(confirm(message)){       //  confirm 은 browser에서 제공
      callback();        // true => callback();
    }
    else{
      rejection();       // false => rejection();
    }
  }

  usePreventLeave :  beforeunload 이벤트 ( 브라우저가 꺼지기 직전 실행되는 함수) 를 이용하여 구현
  useBeforeLeave : 화면 바깥에 가는 이벤트 확인
  useFadeIn  :  animation 효과 적용
  useNetwork  : network online or offline 감지
  useScroll  :  scroll event 감지
  useFullScreen :  browser마다 fullscreen 해주는 함수 적용
  useNotification : browser의 notification API 이용 
 useAxios  :  자동으로 헤더설정,  url 설정 등 HTTP 관련 라이브러리
 