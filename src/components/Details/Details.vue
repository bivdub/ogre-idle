<template lang="pug">
    div.details-container
        h1 placeholder Details
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Detail",
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
.details-container {
  height: 100%;
  border: 0.5em solid black;
}
</style>
