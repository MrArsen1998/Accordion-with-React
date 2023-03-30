import { Route, Routes } from 'react-router-dom';
import Accordion from './Accordion';
import './index.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<Accordion/>}/>
      </Routes>
    </div>
  );
}

export default App;
