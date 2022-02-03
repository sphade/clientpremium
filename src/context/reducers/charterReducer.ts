import { ActionType, GlobalStateType } from "../types";
import { CharterReducerActions } from "./actions";

export  function CharterReducer(state: GlobalStateType, action:ActionType) {
    const { MUTATE_CHARTER } = CharterReducerActions;
    
    switch (action.type) {
      case MUTATE_CHARTER: {
        return {...state, ...action.payload};
      }
      default: {
        return state;
      }
    }
  }