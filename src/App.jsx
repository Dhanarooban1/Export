// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Test from './Components/Test';
import Homepage from './Components/Homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/about" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
