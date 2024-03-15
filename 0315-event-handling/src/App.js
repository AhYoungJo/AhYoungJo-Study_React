// import logo from './logo.svg';
import './App.css';
// import SyntheticEvent from './Syntheticevent';
// import ClassBind from './ClassBind';
// import Counter from './Counter';
import HandlerEx from './components/ex/HandlerEx';
import HandlerColor from './components/ex/HandlerColor';
import HandlerPop from './components/ex/HandlerBlock'
import HandlerBlock from './components/ex/HandlerBlock';
import HandlerInput from './components/ex/HandlerInput';

function App() {
  return (
    <div className="App">
    {/* <SyntheticEvent/>
    <ClassBind/>
    <Counter/> */}
    < HandlerEx />
    < HandlerColor />
    < HandlerBlock />
    < HandlerInput />
    </div>
  );
}

export default App;
