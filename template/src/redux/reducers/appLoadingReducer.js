const actionTypes = Object.freeze({
    UPDATE_LOGIN_STATUS: 'UPDATE_LOGIN_STATUS',
  })
  
  export default function appLoadingReducer(state = {
    UPDATE_LOGIN_STATUS:false
  }, action) {
    switch (action.type) {
  
      case actionTypes.UPDATE_USER:
        return { ...state, "UPDATE_LOGIN_STATUS":action.payload }
      default:
        return state
    }
  }
  
  function setLoginStatus(payload) {
    return { type: actionTypes.UPDATE_LOGIN_STATUS, payload }
  }
  
  
  export const appLoadingActions = {
    setLoginStatus,
  }
  