import {createStore} from "redux";
import { tokenReducer } from "./reducers/tokenReducer";

const store = createStore(tokenReducer);

export default store;