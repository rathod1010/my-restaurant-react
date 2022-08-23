import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk'

import rootReducer from "./reducers/RootReducers";

function ConfigStore()
{
    return createStore(
        rootReducer,applyMiddleware(thunk)
    )
}
export default ConfigStore;