import thunk from 'redux-thunk'
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import loginReducer from './reducers/loginReducer'
import registerReducer from './reducers/registerReducer'
import scholarshipReducer from './reducers/scholarshipReducer'
import mentoringReducer from './reducers/mentoringReducer'

const rootReducer = combineReducers({
    loginReducer : loginReducer,
    registerReducer : registerReducer,
    scholarshipReducer : scholarshipReducer,
    mentoringReducer : mentoringReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk))

export default store