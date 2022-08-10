import { combineReducers } from "redux";
import loadding from './loadding';

const appReducers = combineReducers({
    loadding: loadding

});
export default appReducers;