<template>
  <b-modal
    id="calcModal"
    title="Score Calculator"
    @ok="handleOk"
    @hidden="resetModal"
    @show="resetModal"
  >
    <form>
      <div class="form-group">
        <label for="tempura"> Tempura </label>
        <input
          type="number"
          class="form-control"
          id="tempura"
          v-model="score.tempura"
        />
      </div>
      <div class="form-group">
        <label for="sashimi"> Sashimi </label>
        <input
          type="number"
          class="form-control"
          id="sashimi"
          v-model="score.sashimi"
        />
      </div>
      <div class="form-group">
        <label for="dumpling"> Dumpling </label>
        <input
          type="number"
          class="form-control"
          id="dumpling"
          v-model="score.dumpling"
        />
      </div>
      <div class="form-group">
        <label for="maki"> Maki Rolls </label>
        <input
          type="number"
          class="form-control"
          id="maki"
          v-model="score.maki"
        />
      </div>
      <div class="form-group">
        <label for="s-nigiri"> Salmon Nigiri </label>
        <input
          type="number"
          class="form-control"
          id="s-nigiri"
          v-model="score.sNigiri"
        />
      </div>
      <div class="form-group">
        <label for="q-nigiri"> Squid Nigiri </label>
        <input
          type="number"
          class="form-control"
          id="q-nigiri"
          v-model="score.qNigiri"
        />
      </div>
      <div class="form-group">
        <label for="e-nigiri"> Egg Nigiri </label>
        <input
          type="number"
          class="form-control"
          id="e-nigiri"
          v-model="score.eNigiri"
        />
      </div>
    </form>
  </b-modal>
</template>

<script>
import store from "./../store";
export default {
  props: [],
  data: () => ({
    score: {
      tempura: 0,
      sashimi: 0,
      dumpling: 0,
      maki: 0,
      sNigiri: 0,
      qNigiri: 0,
      eNigiri: 0
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
      this.score.tempura = null;
      this.score.sashimi = null;
      this.score.dumpling = null;
      this.score.maki = null;
      this.score.sNigiri = null;
      this.score.qNigiri = null;
      this.score.eNigiri = null;
    }
  }
};
</script>
<style scoped></style>
