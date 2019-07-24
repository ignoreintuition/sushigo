<template>
  <div id="app">
    <ScoreSheet />
  </div>
</template>

<script>
import ScoreSheet from "./components/ScoreSheet.vue";
export default {
  name: "app",
  components: {
    ScoreSheet
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  height: 100%;
}
body {
  background-color: #3e2411 !important;
}
button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}
</style>
