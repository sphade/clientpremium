import combineReducers from 'react-combine-reducers';
import { ResetPasswordReducer, SignupReducer } from "./userReducer"

export const baseReducer = combineReducers({
        user: [SignupReducer, {}],
        password: [ResetPasswordReducer, {}],
      });