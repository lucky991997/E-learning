import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import StudentReducer from './reducers/StudentReducer';
import LearningReducer from './reducers/LearningReducer';
import TeacherReducer from './reducers/TeacherReducer';
import PointReducer from './reducers/PointReducer';
import ConfigPageReducer from './reducers/ConfigPageReducer';

const rootReducer = combineReducers({
    StudentReducer,
    LearningReducer,
    TeacherReducer,
    PointReducer,
    ConfigPageReducer,
})


const store = createStore (rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof rootReducer>

export default store