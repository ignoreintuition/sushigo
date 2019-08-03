/* jshint esversion:6 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    game: "Sushi Go!",
    currPlayer: 0,
    currRound: 1,
    players: []
  },
  mutations: {
    addPlayer(state, player) {
      player.score = [0, 0, 0, 0];
      state.players.push(player);
    },
    deletePlayer(state, id) {
      state.players.forEach((player, i, players) => {
        if (player.pid === id) {
          players.splice(i, 1);
        }
      });
    },
    setCurrPlayer(state, id) {
      state.currPlayer = id;
    },
    setCurrRound(state, round) {
      state.currRound = round;
    },
    updateCurrPlayerName(state, pName) {
      state.players.forEach((player, i) => {
        if (player.pid === state.currPlayer) {
          state.players[i].name = pName;
        }
      });
    },
    updateCurrPlayerScore(state, score) {
      const values = Object.values(score);
      const total = values.reduce((a, c) => Number(a) + Number(c));
      state.players.forEach((player, i) => {
        if (player.pid === state.currPlayer) {
          Vue.set(state.players[i].score, state.currRound - 1, total);
        }
      });
    }
  },
  getters: {
    players: state => {
      return state.players;
    },
    score: state => p => {
      const thisPlayer = state.players.filter(player => {
        return player.pid === p;
      });
      return thisPlayer[0].score;
    },
    name: state => p => {
      const thisPlayer = state.players.filter(player => {
        return player.pid === p;
      });
      return thisPlayer[0].name;
    }
  }
});
