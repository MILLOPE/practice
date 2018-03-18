
let info = {
  title: '测试新闻标题',
  agreeNum: '0'
}
export default (state=info, action) =>
{
  if(action.type==="INFO_ADDCLICK") {
    let oldNum = state.agreeNum;
    // oldNum++;
    // return Object.assign({},state,{agreeNum:oldNum})
    return Object.assign({},state,{agreeNum:action.num})
  }
  return state;
}
