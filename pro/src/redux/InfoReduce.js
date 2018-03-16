
let info = {
  title: '测试新闻标题',
  clicknum: '0'
}
export default (state=info, action) =>
{
  if(action.type==="INFO_ADDCLICK") {
    let oldNum = state.clicknum;
    oldNum++;
    return Object.assign({},state,{clicknum:oldNum})
  }
  return state;
}
