import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import List from './List';
const { Item: DropdownMenuItem } = Dropdown;

class FilteredList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      type: "All"
    };
  }

  // Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  }

  // Set the state of the "type" state variable depending on what is passed in
  onFilter = (event) => {
    this.setState({ type: event });
  }

  // Change filterItem to take into account the "type" state variable when filtering
filterItem = (item) => {
  const isMatch = item.name.toLowerCase().search(this.state.search) !== -1;

  // Check if the selected type is "All" or if the item's type matches the selected type (case-insensitive)
  const isTypeMatch = this.state.type.toLowerCase() === "all" || item.type.toLowerCase() === this.state.type.toLowerCase();

  return isMatch && isTypeMatch;
}

  render() {
    return (
      <div className="filter-list">
        <DropdownButton
          title={`Type: ${this.state.type}`}
          id="dropdown-basic"
          onSelect={this.onFilter}
        >
          <DropdownMenuItem eventKey="All">All</DropdownMenuItem>
          <DropdownMenuItem eventKey="Fruit">Fruit</DropdownMenuItem>
          <DropdownMenuItem eventKey="Vegetable">Vegetables</DropdownMenuItem>
        </DropdownButton>

        <input type="text" placeholder="Search" onChange={this.onSearch} />
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
