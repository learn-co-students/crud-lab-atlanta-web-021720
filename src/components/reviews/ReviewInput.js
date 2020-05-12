import React, { Component } from 'react';


class ReviewInput extends Component {
  state={ text: '' }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    let review = {...this.state}
    review.restaurantId = this.props.restaurantId
    console.log(review)
    this.props.addReview(review)
    this.setState({ text: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Leave a Review:
            <input onChange={this.handleChange} type='text' name='text' value={this.state.text} />
          </label>
          <input type='submit' value='Submit'/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
