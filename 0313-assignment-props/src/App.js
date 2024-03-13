import { link } from 'react-router-dom';
import './App.css';
// import Food from './Food';

import Cover from './Cover'; 

function App() {
  // const navigate = useNavigate();
  const url = "https://www.yes24.com/Product/Goods/118146744";
    const goToLib = () => {
      return <link to = "https://www.yes24.com/Product/Goods/118146744"></link>
    }
  return (
    <div className="Cover">
      <h1>이번주 베스트셀러</h1>
      <Cover title="아비투스" valid={()=>{window.open(url)}} author="도리스 메르틴" price="20,000원" type="인문">
      <div className="coverImg"></div>
    </Cover>
    </div>
  );
}

export default App;
