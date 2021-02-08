import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: "Max", age: 28},
      {name: "Maxx", age: 29},
      {name: "Maxxx", age: 30},
    ]
  }

  switchNameHandler = (newName) => {
    //DONT DO THIS: this.state.persons[0].name = "Maks";
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: "Seba", age: 29},
        {name: "Janusz", age: 30},
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: "Max", age: 28},
        {name: event.target.value, age: 29},
        {name: "Janusz", age: 30},
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, World!</h1>
        <p>Paragraf</p>
        <button onClick={ () => this.switchNameHandler('Maciej')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Maks')}
          changed={this.nameChangedHandler}
          >
            My hobbies: Racing
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hello, World!!!'))//1-element który ma zostać wyrenderowany do DOM np. div albo własny komponent, 2-jest konfiguracją dla pierwszego, 3
  }
}

export default App;