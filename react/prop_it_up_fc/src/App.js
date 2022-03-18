import './App.css';
import React from 'react';
import PersonCard from './components/PersonCard';

function App() {
    const personData = [
        { firstName: "Jane", lastName: "Doe", age: 45, hairColor: "Black" },
        { firstName: "John", lastName: "Smith", age: 88, hairColor: "Brown" },
        { firstName: "Millard", lastName: "Fillmore", age: 50, hairColor: "Brown" },
        { firstName: "Maria", lastName: "Smith", age: 62, hairColor: "Brown" },
        { firstName: "Edward", lastName: "Elric", age: 14, hairColor: "Blonde" }
    ]

    return (
        <div className="App">
            {
                personData.map( person => {
                    return <PersonCard firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor} />
                } )
            }
        </div>
    );
}

export default App;
