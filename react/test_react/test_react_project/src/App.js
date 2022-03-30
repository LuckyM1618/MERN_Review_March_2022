import React from 'react';
import './App.css';
import TestComponent from './components/TestComponent';
import TestFunctional from './components/TestFunctional';
import TestForm from './components/TestForm';
import TestReducer from './components/TestReducer';

function App() {
    return (
        <div className="App">
            <TestReducer />
        </div>
    );
}

export default App;
