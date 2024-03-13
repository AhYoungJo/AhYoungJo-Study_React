// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Wrapper from './Wrapper';
import Img1 from './src_img/fashion-2309519_640.jpg'
import Img2 from './src_img/sunglasses-2705642_640.jpg'
import Img3 from './src_img/woman-1845577_640.jpg'
import Img4 from './src_img/woman-1853939_640.jpg'
import Img5 from './src_img/woman-7009979_640.jpg'
// import Button from './Button';

// import FunctionComponent from './FunctionComponent';

function App() {
  const name = "코딩온"
  return (
    <div className="App">
      <Header text1="로그인" text2="회원가입"/>
      <Wrapper>
      <Content title="AshBrown" imgURL={Img1}/>      
      <Content title="Blue" imgURL={Img2}/>      
      <Content title="white" imgURL={Img3}/>      
      <Content title="Nature" imgURL={Img4}/>      
      <Content title="Black" imgURL={Img5}/>      
      </Wrapper>
    </div>
  );
}

export default App;

{/* functionComponenet는 중복되는 값 처리에 유용하다.
부모가 넘겨주는 경우 
<FunctionComponent name={name} />
<FunctionComponent title="제목"/>
<FunctionComponent >자식내용</FunctionComponent> */}