const game = {
  state: {
    gameStarted: false
  },
  mutations: {
    START_GAME: state => {
      state.gameStarted = true;
    }
  },
  actions: {
    startGame({ commit }) {
      commit("START_GAME");
    }
  }
};

export default game;
