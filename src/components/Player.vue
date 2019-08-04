<template>
  <div class="labels grid">
    <div class="calculator ">
      <a href="#" @click="editPlayer()" class="head button" v-b-modal.nameModal>
        {{ name }}
      </a>
      <a href="#">
        <img @click="deletePlayer()" class="icon" src="../assets/delete.png" />
      </a>
    </div>
    <a
      href="#"
      @click="itemClicked(1)"
      class="calculator button"
      v-b-modal.scoreModal
    >
      {{ score[0] }}
    </a>
    <a
      href="#"
      @click="itemClicked(2)"
      class="calculator button"
      v-b-modal.scoreModal
    >
      {{ score[1] }}
    </a>
    <a
      href="#"
      @click="itemClicked(3)"
      class="calculator button"
      v-b-modal.scoreModal
    >
      {{ score[2] }}
    </a>
    <a
      href="#"
      @click="itemClicked(4)"
      class="calculator button"
      v-b-modal.scoreDessertModal
    >
      {{ score[3] }}
    </a>
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
      store.commit("setCurrPlayer", this.player.pid);
      store.commit("setCurrRound", round);
    },
    editPlayer: function(event) {
      store.commit("setCurrPlayer", this.player.pid);
    },
    deletePlayer: function() {
      store.commit("deletePlayer", this.player.pid);
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
      return store.getters.score(this.player.pid);
    },
    name: function() {
      return store.getters.name(this.player.pid);
    }
  }
};
</script>

<style scoped>
button:focus {
  outline-width: 0px;
}
.button {
  text-decoration: none;
  color: black;
}
.calculator {
  min-width: 80%;
  background: white;
}
.grid {
  color: #831a15;
  background-color: #acceea;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 240px;
  align-content: center;
  margin: auto;
  justify-content: center;
  padding: 10px;
  -webkit-box-shadow: 0px 0px 45px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 45px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 45px 0px rgba(0, 0, 0, 0.5);
}
.grid > * {
  font-size: 16px;
  border-bottom: 2px solid #acceea;
  flex: 1 1 30px;
}
.icon {
  float: right;
  width: 16px;
  margin: 5px;
}
.head {
  margin: 5px;
}
</style>
