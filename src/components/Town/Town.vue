<template lang="pug">
    div.town-container
        h1 placeholder Town
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Town",
  data() {
    return {
      turn: 0
    };
  },
  props: {},
  computed: {
    ...mapGetters(["game"]),
    gameStarted() {
      return this.$store.state.game.gameStarted;
    }
  },
  methods: {
    startGame() {
      this.$store.dispatch("startGame");
      this.turnLength();
    },
    gameLoop() {
      this.turn++;
    },
    turnLength() {
      setInterval(this.gameLoop, 1000);
    }
  }
};
</script>

<style>
.town-container {
  height: 100%;
  border: .5em solid black;
}
</style>
