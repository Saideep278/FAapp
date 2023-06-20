import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    history('/')
  } catch (error) {
    alert("Login failed,Password and Email does not match")
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    history('/')
  } catch (error) {
    console.log(error);
  } 
};

export const resetpwdaction = (email,pwd,history) => async (dispatch) => {
  try {

    
    await api.resetpwd([email,pwd]);
    alert("password will be updated")

    history('/auth')
  } catch (error) {
    alert("invalid credentials,User doesnt exists ")
    history('/auth')
    
  } 
};