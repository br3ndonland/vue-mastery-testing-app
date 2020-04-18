<template>
  <div>
    <button v-show="loggedIn">Logout</button>
  </div>
</template>

<script>
// import OtherComponent from "OtherComponent.vue"
// import { Mixin } from "mixins/Mixin.js"
export default {
  name: "AppHeader",
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      loggedIn: false,
    }
  },
  computed: {},
  watch: {},
  created() {},
  methods: {},
}
</script>

<style scoped></style>
