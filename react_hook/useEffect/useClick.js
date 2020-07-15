import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';


const useClick = onClick => {
  const element = useRef();
  useEffect(() => {
    if(element.current){
      element.current.addEventListener("click", onClick);
    }
    return()=>{    // componentWillUnmount에 의해 호출 될 것.
      if(element.current){
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
}

const App = () => {
  const sayHello = () => console.log("say Hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  )
  
}

ReactDOM.render(
    <App />, document.getElementById('root')
);

//using componentDidMount,   componentWillUpdate