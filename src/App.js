import React, { Component } from 'react';
import './App.css';
import Person from './Persons/Person';


class App extends Component{
  state ={
    persons:[
      { id: 'mkwqs1', name: 'Max', age: 28},
      { id: 'wmsdmx2', name: 'chi', age: 40 },
      { id: 'cjefs3', name: 'Sam', age: 14 }
    ],
    otherState: 'Some other value',
    showPersons: false
  }

  togglePersonHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow})
  }

  deletePersonHandler = (personIndex)=>{
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons});
  }


  nameChangedHandler = (event, id) => {
    const personId = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {...this.state.persons[personId]};

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personId] = person;

    this.setState({ persons: persons });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    
      let persons =null;
      if(this.state.showPersons){
       persons =(
          <div>
            {this.state.persons.map((persons, index) => {
              return <Person
                click= {() => this.deletePersonHandler(index)}
                name={persons.name}
                age={persons.age}
                key={persons.id}
                changed={(event) => this.nameChangedHandler(event, persons.id)} />
            } )}
          </div>
        )
      }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={ this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
    );


  }
}




export default App;
