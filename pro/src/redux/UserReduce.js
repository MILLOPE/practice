export default (state={btnDisabled:false}, action) =>
{
  if(action.type==="UPDATE_USERFORM") {
    return Object.assign({},state,action.Form)
  }
  if(action.type==="ACTIVE_CHANGE") {
    console.log(action)
    return Object.assign({},state,{btnDisabled: action.btnDisabled})
  }
  return state;
}
