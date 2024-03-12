import logo from './logo.svg';
import './App.css';
import FunctionComponent from './FunctionComponent';

function App() {
  const name = "코딩온"
  return (
    <div className="App">
      <head></head>
      <body>
        {/** functionComponenet는 중복되는 값 처리에 유용하다.
         * 부모가 넘겨주는 경우 */}
        <FunctionComponent name={name} />
        <FunctionComponent title="제목"/>
        <FunctionComponent >자식내용</FunctionComponent>
      </body>
    </div>
  );
}

export default App;
