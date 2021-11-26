import combineReducers from 'react-combine-reducers';
import { ResetPasswordReducer, SignupReducer, UserReducer } from "./userReducer"

export const baseReducer = combineReducers({
        signupInfo: [SignupReducer, {}],
        password: [ResetPasswordReducer, {}],
        user: [UserReducer, {}],
      });