import React from 'react';
import './App.css';
import TestComponent from './components/TestComponent';

function App() {
  return (
    <div className="App">
      <TestComponent firstName={"Edward"} lastName={"Elric"} />
    </div>
  );
}

export default App;
