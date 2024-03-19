import './App.css';
import UseMemoEx from './Components/useMemoEx';
import UseCallbackEx from './Components/useCallbackEx';
import UseReducerEx from './Components/useReducerEx';
import Faq from './Components/Faq';
import Form from './Components/Form';
import InputInfo from './Components/InputInfo';

function App() {
  return (
    <div className="App">
      <UseMemoEx />
      <UseCallbackEx postId={9}/>
      <UseReducerEx />
      <Faq />
      <br />
      <hr />
      <Form />
      <br />
      <InputInfo />
    </div>
  );
}

export default App;
