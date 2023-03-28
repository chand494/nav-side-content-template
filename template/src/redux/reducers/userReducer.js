const actionTypes = Object.freeze({
    SET_USER: 'SET_USER',
    UPDATE_USER: 'UPDATE_USER',
    CLEAR_USER: 'CLEAR_USER',
  })
  
  export default function userReducer(state = {}, action) {
    switch (action.type) {
      case actionTypes.SET_USER: // LOGIN
        return { ...action.payload }
  
      case actionTypes.UPDATE_USER:
        return { ...state, ...action.payload }
  
      case actionTypes.CLEAR_USER: // LOGOUT
        return null
  
      default:
        return state
    }
  }
  
  function setUser(payload) {
    // sets user, replacing existing
    return { type: actionTypes.SET_USER, payload }
  }
  
  function updateUser(payload) {
    // adds {key: value} pair(s) to existing user object
    return { type: actionTypes.UPDATE_USER, payload }
  }
  
  function clearUser(payload) {
    // removes all properties in user, returns empty object
    return { type: actionTypes.CLEAR_USER, payload }
  }
  
  export const userActions = {
    setUser,
    updateUser,
    clearUser,
  }
  