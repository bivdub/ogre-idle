<template lang="pug">
    main
        el-row(v-if="!gameStarted")
            el-button(type="primary" @click="startGame") Start Game!
        div(v-if="gameStarted")
            el-row.top-row(:gutter="20")
                el-col.town(:span="8")
                    Town
                el-col.party(:span="8")
                    Party
                el-col.map(:span="8")
                    Map
            el-row
                h2 turn: {{turn}}
            el-row.bottom-row(:gutter="20")
                el-col.inventory(:span="12")
                    Inventory
                el-col.details(:span="12")
                    Details
</template>

<script>
import { mapGetters } from "vuex";
import { Town, Map, Party, Inventory, Details } from "./index";

export default {
  name: "Game",
  components: {
    Town,
    Map,
    Party,
    Inventory,
    Details
  },
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
.top-row {
  position: fixed;
  height: 33vh;
}

.bottom-row {
  position: fixed;
  height: 50vh;
}

.town {
  height: 100%;
}

.party {
  height: 100%;
}

.map {
  height: 100%;
}

.inventory {
  height: 100%;
}

.details {
  height: 100%;
}
</style>
