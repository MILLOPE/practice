export default (state={btnDisabled:false, isLogin: false, myLevel: ''}, action) =>
{
  if(action.type==="UPDATE_USERFORM") {
    return Object.assign({},state,action.Form)
  }

  if(action.type==="ACTIVE_CHANGE") {
    console.log(action)
    return Object.assign({},state,{btnDisabled: action.btnDisabled})
  }

  if(action.type==="LOGIN_SUCCESS") {
    console.log(action)
    return Object.assign({},state,{isLogin: true})
  }

  if(action.type==="LOGIN_ERROR" || action.type==="LOGIN_OUT_DONE") {
    return Object.assign({},state,{isLogin: false})
  }

  if(action.type==="UPDATE_USERLEVEL") {
    console.log(action)
    return Object.assign({},state,{myLevel: action.level})
  }

  return state;
}
