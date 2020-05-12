
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={
    restaurants: [],
    reviews: []
}, action) {
    switch(action.type) {
        case 'ADD_RESTAURANT':
            const newRest = {
                id: cuid(),
                text: action.text,
                reviews: []
            }
            return { ...state, restaurants: [...state.restaurants, newRest]};
        
        case 'DELETE_RESTAURANT':
            const filtered = [...state.restaurants].filter(r => r.id !== action.id)
            return {...state, restaurants: filtered};
        case 'ADD_REVIEW':
            const newRev = {
                id: cuid(),
                restaurantId: action.restaurantId,
                text: action.text
            }

            return {...state, reviews: [...state.reviews, newRev]};
        case 'DELETE_REVIEW':
            const filteredRev = [...state.reviews].filter(review => review.id !== action.id)
            return {...state, reviews: filteredRev}
        default:
            return state;
    }

}
