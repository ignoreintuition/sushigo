<template>
  <b-modal
    id="nameModal"
    title="Player Name"
    @ok="handleOk"
    @hidden="resetModal"
    @show="resetModal"
  >
    <form>
      <div class="form-group">
        <label for="playerName"> Player Name </label>
        <input
          type="string"
          class="form-control"
          id="playerName"
          v-model="playerName"
        />
      </div>
    </form>
  </b-modal>
</template>

<script>
import store from "./../../store";
export default {
  props: [],
  data: () => ({
    playerName: null
  }),
  methods: {
    handleOk(bvModalEvt) {
      this.handleSubmit();
    },
    handleSubmit() {
      store.commit("updateCurrPlayerName", this.playerName);
    },
    resetModal() {
      this.playerName = null;
    }
  }
};
</script>
<style scoped></style>
