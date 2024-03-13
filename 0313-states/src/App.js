// import logo from './logo.svg';
import './App.css';
// import Counter from './Counter'
import TextFunction from './Text';
import {useState} from 'react';
import Number from './Number'
import NumberClass from './NumberClass';
import SayFunc from './SayFunc';

function App() {
  const [msg, setMSG] = useState("");
  const successConsole = () => {
      setMSG("콘솔에 출력 성공!")
  }
  return (
    <>
      <div className='Text'>
        <TextFunction />
        <TextFunction text={msg} valid={successConsole}/>
      </div>
      <Number/>
      <NumberClass/>
      <SayFunc/>
    </>
  );
}

export default App;
