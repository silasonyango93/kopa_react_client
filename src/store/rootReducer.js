import { combineReducers } from "redux";
import reduceReducers from "reduce-reducers";
import { reducer as current_session } from "./modules/current_session";
import { reducer as admin_home } from "./modules/admin_home";
import { reducer as company_owner_home } from "./modules/company_owner_home";
import { reducer as user_home } from "./modules/user_home";

// =============================================================
// The rootReducer object aggregates our earlier reducers into a
// single reducer that holds our entire immutable application
// (theme) state.
// =============================================================

const rootReducer = reduceReducers(
  combineReducers({
    current_session,
      admin_home,
      company_owner_home,
      user_home
  })
);

export default rootReducer;
