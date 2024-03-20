import './Styles/App.css';
import CssModule from './Components/CssModule';
import SassComponent from './Components/SassComponent';
import StyledComponent from './Components/StyledComponent';
import Larva from './Components/Larva';
import Circle from './Components/Circle';

function App() {
  return (
    <div className="App">
      <h1>React Styling</h1>
      <CssModule />
      <SassComponent />
      <StyledComponent />
      <Larva></Larva>
      <Circle />
    </div>
  );
}

export default App;
