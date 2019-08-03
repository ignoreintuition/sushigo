<template>
  <b-modal
    id="scoreDessertModal"
    title="Score Calculator"
    @ok="handleOk"
    @hidden="resetModal"
    @show="resetModal"
  >
    <form>
      <div class="form-group">
        <label for="pudding"> Pudding </label>
        <input
          type="number"
          class="form-control"
          id="desert"
          v-model="score.pudding"
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
    score: {
      pudding: null
    }
  }),
  methods: {
    handleOk(bvModalEvt) {
      this.handleSubmit();
    },
    handleSubmit() {
      store.commit("updateCurrPlayerScore", this.score);
    },
    resetModal() {
      this.score.pudding = 0;
    }
  }
};
</script>
<style scoped></style>
