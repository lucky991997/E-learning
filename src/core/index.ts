import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import StudentReducer from './reducers/StudentReducer';
import LearningReducer from './reducers/LearningReducer';

const rootReducer = combineReducers({
    StudentReducer,
    LearningReducer,
})


const store = createStore (rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof rootReducer>

export default store