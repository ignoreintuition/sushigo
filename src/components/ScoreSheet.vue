<template>
  <div id="scoresheet">
    <div id="header">
      <h1>SUSHI GO!</h1>
    </div>
    <div class="row">
      <div class="col-2">
        <div class="labels grid">
          <div>Name</div>
          <div>Round 1</div>
          <div>Round 2</div>
          <div>Round 3</div>
          <div>Dessert</div>
          <div>Total</div>
        </div>
      </div>
      <div v-for="(player, index) in players" class="col-2">
        <Player v-bind:player="player"> </Player>
      </div>
      <div class="col-2">
        <img @click="addPlayer()" class="icon" src="../assets/add.svg" />
      </div>
    </div>

    <ScoreModal />
    <ScoreDessertModal />
    <NameModal />
  </div>
</template>

<script>
import Player from "./Player.vue";
import ScoreModal from "./modals/Score.vue";
import ScoreDessertModal from "./modals/ScoreDessert.vue";
import NameModal from "./modals/Name.vue";
import store from "./../store";
export default {
  props: {},
  components: {
    Player,
    ScoreModal,
    ScoreDessertModal,
    NameModal
  },
  methods: {
    addPlayer: function(event) {
      store.commit("addPlayer", {
        name: "Christian",
        pid: Math.floor(Math.random() * 10000) + 1
      });
    }
  },
  data: () => ({
    players: store.getters.players
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#scoresheet {
  color: #ffffff;
  font-size: 60px;
  border: #c72229 30px solid;
  padding: 20px;
  border-radius: 20px;
  background-color: #85171a;
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
  border-radius: 5px;
}
.grid > * {
  font-size: 16px;
  flex: 1 1 30px;
}
img.logo {
  width: 80%;
}

img.sushi {
  width: 300px;
  float: right;
}
#header {
  font-family: "Arial Black", Gadget, sans-serif;
}
</style>
