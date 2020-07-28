function game(
  state = {
    initGame: {
      started: false,
    },
  },
  action,
) {
  switch (action.type) {
    case 'INIT_GAME': {
      return {...state, ...action.payload};
    }

    default: {
      return state;
    }
  }
}

export default game;
