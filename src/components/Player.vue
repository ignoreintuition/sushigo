<template>
  <div class="labels grid">
    <div>{{ player.name }}</div>
    <button @click="itemClicked(1)" class="calculator" v-b-modal.calcModal>
      {{ score[0] }}
    </button>
    <button @click="itemClicked(2)" class="calculator" v-b-modal.calcModal>
      {{ score[1] }}
    </button>
    <button @click="itemClicked(3)" class="calculator" v-b-modal.calcModal>
      {{ score[2] }}
    </button>
    <button @click="itemClicked(4)" class="calculator" v-b-modal.calcModal>
      {{ score[3] }}
    </button>
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
    }
  },
  computed: {
    total: function() {
      return this.score[0] + this.score[1] + this.score[2] + this.score[3];
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
  min-width: 100px;
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
</style>
