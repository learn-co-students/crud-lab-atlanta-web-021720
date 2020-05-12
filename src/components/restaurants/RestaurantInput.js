import React, { Component } from 'react';

class RestaurantInput extends Component {

  state= {
    text: ""
  }

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({ text: "" })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>Create New Restaurant
          <input type="text" name="text" value={this.state.text} onChange={this.handleOnChange}/>
        </label>
        <input type="submit" value="Enter"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
