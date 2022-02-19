import './App.css';
import  HeaderBlock  from './components/firstBlock/header';
import { FooterBlock } from './components/fourthBlock/footer';
import  MainBlock  from './components/secondBlock/main';
import { ImageContent } from './components/thirdBlock/content';

function App() {
  return (
    <div className="App">
     <HeaderBlock/>
     <MainBlock/>
     <ImageContent/>
     <FooterBlock/>
    </div>
  );
}

export default App;
