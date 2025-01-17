import React from 'react'
import  ReactDOM  from 'react-dom/client'
import App from './App'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import { applyMiddleware ,compose} from 'redux'
import { configureStore  } from '@reduxjs/toolkit'

import './index.css'


import {reducers} from './reducers'


const store = configureStore({reducer:reducers},{},compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <App />    
    </Provider>,  
)




/*
ReactDOM.render(
    <Provider store={store}>
        <App />    
    </Provider>,    
    document.getElementById('root')
    
)



*/