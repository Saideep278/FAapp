import { FETCH_ALL, FETCH_BY_SEARCH, FETCH_POST, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (state = { isLoading: true, wishlist: [] }, action) => {
  switch (action.type) {
    case 'START_LOADING':
        return { ...state, isLoading: true };
    case 'END_LOADING':
        return { ...state, isLoading: false };
    case "ADDTO_WISHLISTED":
        const r = {...state,wishlist : [...state.wishlist,action.payload.data] };
        return r
    case "FETCHTO_WISHLISTED":
        const rf = {...state,wishlist : [[...state.wishlist],action.payload.data] };
        return rf
    default:
        return state;
  }
};
