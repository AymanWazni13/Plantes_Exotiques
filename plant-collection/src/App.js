import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import PlantCollection from './PlantCollection';
import PlantDetails from './PlantDetails';
import Navigation from './Navigation';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navigation />
        <Routes>
          {/* Utilisation de element au lieu de component */}
          <Route path="/" element={<PlantCollection />} />
          <Route path="/details" element={<PlantDetails />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
