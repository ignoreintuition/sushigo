/* jshint esversion:6 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    game: "Sushi Go",
    currPlayer: 0,
    currRound: 1,
    players: []
  },
  mutations: {
    addPlayer(state, player) {
      player.score = [0, 0, 0, 0];
      state.players.push(player);
    },
    deletePlayer(state, index) {
      state.players.splice(index, 1);
    },
    setCurrPlayer(state, playerNbr) {
      state.currPlayer = playerNbr;
    },
    setCurrRound(state, round) {
      state.currRound = round;
    },
    updateCurrPlayerScore(state, score) {
      const values = Object.values(score);
      const s = values.reduce((a, c) => Number(a) + Number(c));
      Vue.set(
        state.players[state.currPlayer - 1].score,
        state.currRound - 1,
        s
      );
    }
  },
  getters: {
    players: state => {
      return state.players;
    },
    score: state => p => {
      return state.players[p - 1].score;
    }
  }
});
