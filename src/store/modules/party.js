const party = {
  state: {
    partyGrid: [
      { row: [{ id: 1 }, { id: 2 }, { id: 3 }] },
      { row: [{ id: 4 }, { id: 5 }, { id: 6 }] },
      { row: [{ id: 7 }, { id: 8 }, { id: 9 }] }
    ]
  },
  mutations: {
    UPDATE_PARTY: (state, value) => {
      state.partyGrid = value;
    }
  },
  actions: {
    updateParty({ commit }, value) {
      commit("UPDATE_PARTY", value);
    }
  }
};

export default party;
