import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} addReview={this.props.addReview}/>
        <Reviews restaurantId={this.props.restaurant.id} reviews={this.props.reviews} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: review => dispatch({
      type: "ADD_REVIEW", 
      text: review.text, 
      restaurantId: review.restaurantId
    }),
    deleteReview: id => dispatch({
      type: "DELETE_REVIEW",
      id: id
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
