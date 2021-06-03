import logo from './logo.svg';
import './App.css';

function App() {
  const onClick = () => {
    import('./notify').then(result => result.default());
  }
  // 클릭하는 시점에 새로운 자바스크립트 파일을 불러온다.
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}> Edit <code>src/App.js</code> and save to reload.</p>
      </header>
    </div>
  );
}

export default App;
