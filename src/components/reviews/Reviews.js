import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const filteredReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
    return (
      <ul>
        {filteredReviews.map( review => 
        <Review review={review} 
        deleteReview={this.props.deleteReview} 
        key={review.id} 
        />)}
      </ul>
    );
  }
};

export default Reviews;