import combineReducers from "react-combine-reducers";
import { CharterReducer } from "./charterReducer";
import {
  ResetPasswordReducer,
  SignupReducer,
  UserReducer,
} from "./userReducer";

export const baseReducer = combineReducers({
  signupInfo: [SignupReducer, {}],
  password: [ResetPasswordReducer, {}],
  user: [UserReducer, {}],
  charter: [CharterReducer, {}],
});
