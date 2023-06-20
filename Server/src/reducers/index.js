import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import wishlist from './wishlist';


export const reducers = combineReducers({ posts, auth , wishlist });