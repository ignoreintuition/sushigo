<template>
  <div id="scoresheet">
    <div id="header">
      <img class="logo" src="../assets/sg.png" />
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
      <div v-for="player in players" class="col-2">
        <Player v-bind:player="player"> </Player>
      </div>
    </div>
    <img class="sushi" src="../assets/Wasabi.png" />
    <Score />
  </div>
</template>

<script>
import Player from "./Player.vue";
import Score from "./Score.vue";
import store from "./../store";
export default {
  props: {},
  components: {
    Player,
    Score
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
img.logo {
  width: 80%;
}

img.sushi {
  width: 300px;
  float: right;
}
</style>
