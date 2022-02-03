import { ActionType, GlobalStateType } from '../types';
export const SignupReducerType = {
    STORE_SIGNUP_DETAILS: 'ADD_TO_STORE',
    CLEAR_SIGNUP_DETAILS: 'CLEAR_SIGNUP_DETAILS',
  };
  
export const ResetPassordType = {
    STORE_PASSWORD_DETAILS: 'STORE_PASSWORD_DETAILS',
    CLEAR_SIGNUP_DETAILS: 'CLEAR_SIGNUP_DETAILS',
  };
export const UserReducerType = {
    MUTATE_USER: 'MUTATE_USER',
  };
  

export  function SignupReducer(state: GlobalStateType, action:ActionType) {
    const { STORE_SIGNUP_DETAILS, CLEAR_SIGNUP_DETAILS } = SignupReducerType;
    
    switch (action.type) {
      case STORE_SIGNUP_DETAILS: {
        return {...state,...action.payload};
      }
      case CLEAR_SIGNUP_DETAILS: {
        return { ...state, ...action.payload };
      }
  
      default: {
        return state;
      }
    }
  }
export  function ResetPasswordReducer(state: GlobalStateType, action:ActionType) {
    const { STORE_PASSWORD_DETAILS, CLEAR_SIGNUP_DETAILS } = ResetPassordType;
    
    switch (action.type) {
      case STORE_PASSWORD_DETAILS: {
        return {...state, ...action.payload};
      }
      case CLEAR_SIGNUP_DETAILS: {
        return { ...state, ...action.payload };
      }
  
      default: {
        return state;
      }
    }
  }
export  function UserReducer(state: GlobalStateType, action:ActionType) {
    const { MUTATE_USER } = UserReducerType;
    
    switch (action.type) {
      case MUTATE_USER: {
        return {...state, ...action.payload};
      }
      default: {
        return state;
      }
    }
  }



