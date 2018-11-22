const messagesReducer = (state, action) => {
  if (state === undefined) {
    // Reducer initialisation
    return [];
  }

  switch (action.type) {
    case 'FETCH_MESSAGES':
      return action.payload;
    case 'NEW_MESSAGE':
      const copiedState = state.slice(0);
      copiedState.push(action.payload);
      return copiedState;
    default:
      return state;
  }
}

export default messagesReducer;
