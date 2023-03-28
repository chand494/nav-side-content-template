import { call, put, takeLatest, select } from 'redux-saga/effects'
import { userActions } from '../reducers/userReducer'

export const userSagaTypes = Object.freeze({
  ATTEMPT_LOGIN: 'ATTEMPT_LOGIN',
  CHECK_PERSISTED_USER: 'CHECK_PERSISTED_USER',
  LOGOUT_USER: 'LOGOUT_USER',
  SAVE_USER: 'SAVE_USER',
})

function* attemptLogin(action) {
  try {

  } catch (error) {
  }
}

function* checkPersistedUser(action) {
  // Look in session storage for previously authenticated user object
  const prevUser = yield localStorage.getItem('user')
  const parsedPrevUser = prevUser ? JSON.parse(prevUser) : null
  if (parsedPrevUser) {
    // Put user object in Redux store if available
    yield put(userActions.setUser(parsedPrevUser))
  }
}

function* logoutUser(action) {
  localStorage.clear()
  yield put(userActions.clearUser())
}

function* userSaga() {
  yield takeLatest(userSagaTypes.ATTEMPT_LOGIN, attemptLogin)
  yield takeLatest(userSagaTypes.CHECK_PERSISTED_USER, checkPersistedUser)
  yield takeLatest(userSagaTypes.LOGOUT_USER, logoutUser)
}

export default userSaga
