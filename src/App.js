import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Start from './Start.jsx';
import Level3 from '../src/pages/level3/Level3.jsx';
import Level2 from '../src/pages/level2/level2.jsx';
import Level1 from '../src/pages/level1/level1.jsx';

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Start />}/>
          <Route path='/level3' element={<Level3 />}/>
          <Route path='/level2' element={<Level2 />}/>
          <Route path='/level1' element={<Level1 />}/>
        </Routes>
      </Router>
    );
  }
  
export default App;