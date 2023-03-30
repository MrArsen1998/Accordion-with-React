import { Route, Routes } from 'react-router-dom';
import AccordionApp from './classComponent/ClassAccordionApp';
import FunctionalApp from './functionalComponent/FunctionalAccordionApp';
import './index.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<AccordionApp/>}/>
        <Route path="/func" element = {<FunctionalApp/>}/>
      </Routes>
    </div>
  );
}

export default App;
