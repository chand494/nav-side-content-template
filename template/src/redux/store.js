import {configureStore} from '@reduxjs/toolkit'
import {all} from 'redux-saga/effects'
import createSagaMiddleware from 'redux-saga'
import userSaga from './sagas/user.saga'
import appReducer from './appReducer.js'
const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
    reducer:appReducer,
    middleware: [sagaMiddleware]

})

function* rootSaga(){
    yield all([
        userSaga()
    ])
}