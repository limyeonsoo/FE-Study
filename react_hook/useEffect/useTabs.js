import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const content = [
  {
    tab : "Section 1",
    content: "I'm the content of the Section1"
  },
  {
    tab : "Section 2",
    content: "I'm the content of the Section2"
  }
]

const useTabs  =(initialTab, allTabs) =>{
  // if(!allTabs || !Array.isArray(allTabs)){
  //   return;
  // }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
}


const App = () => {
  const {currentItem, changeItem} = useTabs(0, content);
  return (
    <div className = "App">
      {content.map((section, index) => (
      <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div> {currentItem.content}</div>
    </div>
  )
}

ReactDOM.render(
    <App />, document.getElementById('root')
);
