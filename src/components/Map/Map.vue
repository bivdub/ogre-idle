<template lang="pug">
    div.map-container
        h1 placeholder Map
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Map",
  data() {
    return {};
  },
  props: {},
  computed: {
    ...mapGetters(["game"])
  },
  methods: {}
};
</script>

<style>
.map-container {
  height: 100%;
  border: .5em solid black;
}
</style>
