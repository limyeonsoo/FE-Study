import Counter from './components/Counter';
import CounterContainer from './components/CounterContainer';
import Todos from './components/Todos';
import TodosContainer from './components/TodosContainer';


function App() {
  return (
    <div>
      <CounterContainer />
      <hr/>
      <TodosContainer />
    </div>
  );
}

export default App;
