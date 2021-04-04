import React from 'react';
//import logo from './logo.svg';
//import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component{
  state = {
    count:0
  }
  plus = () => {
    //this.setState({count : this.state.count + 1});
    this.setState(current => ({ count : current.count + 1}));
    console.log(this.state.count);
  }
  minus = () =>{
    //this.setState({count: this.state.count - 1});
    this.setState(current => ({ count : current.count - 1}));
    console.log(this.state.count);
  }
  render(){  
    return (
      <div>
        Hello The Number {this.state.count};
        <button onClick={this.plus}>plus</button>
        <button onClick={this.minus}>minus</button>
      </div>

    )
  }
}

export default App;
