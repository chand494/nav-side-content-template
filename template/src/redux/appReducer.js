import {combineReducers} from 'redux'
import userReducer from './reducers/userReducer.js'

const appReducer = combineReducers({
    'USER':userReducer
})
export default appReducer