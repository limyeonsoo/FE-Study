import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';




const App = () => {
  const ref = useRef();
  setTimeout(() => ref.current.focus(), 5000);
    return (
      <div className="App">
        <div> hi </div>
        <input ref={ref} placeholder="la" />
      </div>
    );
  
}

ReactDOM.render(
    <App />, document.getElementById('root')
);

//using componentDidMount,   componentWillUpdate