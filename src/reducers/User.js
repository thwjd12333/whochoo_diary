const initState = {
  id: '',
  pw: '',
  nickName: '',
}

export default function user(state = initState, action) {
  switch (action.type) {
    case 'ACTION_SAVE_ALL':
      const newTarget = {
        ...state,
        id: action.value.id,
        pw: action.value.pw,
        nickName: action.value.nickName,
      }
      return newTarget
    default:
      return state
  }
}
