<template>
  <div class="labels grid">
    <div>
      <img @click="deletePlayer(index)" class="icon" src="../assets/delete.svg" />
      {{ player.name }}
    </div>
    <div @click="itemClicked(1)" class="calculator" v-b-modal.calcModal>
      {{ score[0] }}
    </div>
    <div @click="itemClicked(2)" class="calculator" v-b-modal.calcModal>
      {{ score[1] }}
    </div>
    <div @click="itemClicked(3)" class="calculator" v-b-modal.calcModal>
      {{ score[2] }}
    </div>
    <div @click="itemClicked(4)" class="calculator" v-b-modal.dModal>
      {{ score[3] }}
    </div>
    <div class="calculator">{{ total }}</div>
  </div>
</template>
<script>
import store from "./../store";
export default {
  props: ["player"],
  data: () => ({}),
  methods: {
    itemClicked: function(round, event) {
      store.commit("setCurrPlayer", this.player.player);
      store.commit("setCurrRound", round);
    },
    deletePlayer: function(index) {
      store.commit("deletePlayer", index);
    }
  },
  computed: {
    total: function() {
      return (
        Number(this.score[0]) +
        Number(this.score[1]) +
        Number(this.score[2]) +
        Number(this.score[3])
      );
    },
    score: function() {
      return store.getters.score(this.player.player);
    }
  }
};
</script>

<style scoped>
button:focus {
  outline-width: 0px;
}

.calculator {
  min-width: 80%;
  margin: 1px;
  background: white;
}
.grid {
  color: #831a15;
  background-color: #acceea;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 220px;
  align-content: center;
  margin: auto;
  justify-content: center;
  padding: 10px;
}
.grid > * {
  font-size: 16px;
  flex: 1 1 30px;
}
.icon {
  float: left;
  width: 16px;
}
</style>
