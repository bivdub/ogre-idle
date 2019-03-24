<template lang="pug">
    main
        el-row
            h1 Sup Buddy! {{gameStarted}}
        el-row(v-if="!gameStarted")
            el-button(type="primary" @click="startGame") Start Game!
        el-row(v-if="gameStarted")
            h2 turn: {{turn}}
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Game",
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

<style></style>
