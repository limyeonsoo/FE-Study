import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';


const App = () => {
  const sayHello = () => console.log("hello");

  const [number, setNumber] = useState(0);
  const [aNumber, setANumber] = useState(0);

  useEffect(sayHello, []);
  useEffect(sayHello);
  useEffect(sayHello, [number]);

  return (
    <div className="App">
      <div> Hi </div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setANumber(aNumber + 1)}>{aNumber}</button>
    </div>
  )
  
}

ReactDOM.render(
    <App />, document.getElementById('root')
);
