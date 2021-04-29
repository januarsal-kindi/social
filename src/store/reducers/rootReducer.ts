import {combineReducers} from "redux";
import userReducer from  "./user";
import userDetail from  "./userDetail";

const RootReducer = combineReducers({
  user: userReducer,
  userDetail
});

export type RootStore = ReturnType<typeof RootReducer>

export default RootReducer