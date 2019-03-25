<template lang="pug">
    div.inventory-container
        h1 placeholder Inventory
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Inventory",
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
.inventory-container {
  height: 100%;
  border: 0.5em solid black;
}
</style>
