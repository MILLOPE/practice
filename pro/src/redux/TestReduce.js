export default function(state = {count: 1}, action) {
  if(action.type ==='ADD') {
    let count = state.count;
    count += 1;
    return Object.assign({}, state, {count});
  }
  return state;
}
