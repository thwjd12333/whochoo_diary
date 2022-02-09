const initState = []

export default function dayLog(state = initState, action) {
  switch (action.type) {
    case 'ACTION_ADD_LOG':
      const newTarget = {
        id: new Date().getTime(),
        emotion: action.value.emotion,
        content: action.value.content,
        date: action.value.date,
        userId: action.value.userId,
        deleted: false,
      }
      return state.concat([newTarget])
    default:
      return state
  }
}
