import { ActionType, GlobalStateType } from '../types';
export const SignupReducerType = {
    STORE_SIGNUP_DETAILS: 'ADD_TO_STORE',
    CLEAR_SIGNUP_DETAILS: 'CLEAR_SIGNUP_DETAILS',
  };
  
export const ResetPassordType = {
    STORE_PASSWORD_DETAILS: 'ADD_TO_STORE',
    CLEAR_SIGNUP_DETAILS: 'CLEAR_SIGNUP_DETAILS',
  };
  


  

export  function SignupReducer(state: GlobalStateType, action:ActionType) {
    const { STORE_SIGNUP_DETAILS, CLEAR_SIGNUP_DETAILS } = SignupReducerType;
    
    switch (action.type) {
      case STORE_SIGNUP_DETAILS: {
        return {...state, ...action.payload};
      }
      case CLEAR_SIGNUP_DETAILS: {
        return { ...state, ...action.payload };
      }
  
      default: {
        throw new Error(`Unhandled action type: ${action.type}`);
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
        throw new Error(`Unhandled action type: ${action.type}`);
      }
    }
  }
