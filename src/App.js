import React from 'react';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer.jsx';
import './App.css';
import Header from './components/layout/Header'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <SortingVisualizer></SortingVisualizer>
      </div>
    </div>

  );
}

export default App;