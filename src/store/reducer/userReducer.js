import info,{ actions } from '../../constant'

export function userReducer(state={},action) {
  switch(action.type){
    case actions.LOGIN:
      const { data } = action;
      return data;
    default:
      return state;
  }
}