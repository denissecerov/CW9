import React, { Component } from 'react'; 
import './App.css';
import FilteredList from './FilteredList';
import Counter from './Counter';

const produce = [
  { name: "Apple", type: "Fruit" },
  { name: "Pineapple", type: "Fruit" },
  { name: "Banana", type: "Fruit" },
  { name: "Pear", type: "Fruit" },
  { name: "Strawberry", type: "Fruit" },
  { name: "Orange", type: "Fruit" },
  { name: "Lettuce", type: "Vegetable" },
  { name: "Cucumber", type: "Vegetable" },
  { name: "Eggplant", type: "Vegetable" },
  { name: "Squash", type: "Vegetable" },
  { name: "Bell Pepper", type: "Vegetable" },
  { name: "Onion", type: "Vegetable" },
];



class App extends Component {
  render() {
    return (
      <div className="App">
	  <Counter />
        <FilteredList items={produce} />
      </div>
    );
  }
  
}

export default App