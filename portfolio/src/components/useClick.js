import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

export const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if(element.current){
      element.current.addEventListener("click", onClick);
      console.log("clicked");
    }
    return()=>{    // componentWillUnmount에 의해 호출 될 것.
      if(element.current){
        element.current.removeEventListener("click", onClick);
      }
    };
  },[element]);
  return element;
}