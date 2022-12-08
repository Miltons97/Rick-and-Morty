import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./reducer";

const store = createStore(
        rootReducer, applyMiddleware(thunk)
 );
//  const composeEnhancer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose; 
 
 

 export default store;
