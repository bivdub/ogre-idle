<template lang="pug">
    div.party-container
        draggable.dragArea(:list="party")
            el-row.party-row(:gutter="10" v-for="(partyRow, index) in party" :key="index")
                draggable(:tasks="partyRow.row")
                    el-col.party-square(:span="8" v-for="character in partyRow.row" :key="character.id")
                        h2 {{character.id}}

</template>

<script>
import { mapGetters } from "vuex";
import draggable from "vuedraggable";

export default {
  name: "Party",
  data() {
    return {};
  },
  props: {},
  computed: {
    ...mapGetters(["party"]),
    party: {
      get() {
        return this.$store.state.party.partyGrid;
      },
      set(value) {
        console.log(value);
        this.$store.commit("updateParty", value);
      }
    }
  },
  components: {
    draggable
  },
  methods: {}
};
</script>

<style>
.party-container {
  height: 100%;
  width: 100%;
  border: 0.5em solid black;
}

.party-row {
  height: 33%;
}

.party-square {
  border: 1px solid black;
}
</style>
