import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlantCollection from './components/PlantCollection';
import PlantDetails from './components/PlantDetails';
import Navigation from './components/Navigation';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Navigation */}
          <Navigation />

          <Routes>
            <Route path="/" element={<PlantCollection />} />
            <Route path="/details" element={<PlantDetails />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
