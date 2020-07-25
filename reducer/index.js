function game(state = {}, action) {
  switch (action.type) {
    case 'INIT_GAME': {
      return {...state, ...action.payload.initGame};
    }

    default: {
      return state;
    }
  }
}

export default game;
