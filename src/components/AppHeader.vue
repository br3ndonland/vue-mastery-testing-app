<template>
  <div>
    <button v-show="loggedIn">Logout</button>
    <message-display />
  </div>
</template>

<script>
import MessageDisplay from "@/components/MessageDisplay.vue"
export default {
  components: {
    "message-display": MessageDisplay,
  },
  data() {
    return {
      loggedIn: false,
    }
  },
}
</script>

<style scoped>
.app-header {
  min-height: 40px;
  padding: 0.2em 1em;
  background: white;
}
button {
  float: right;
}
</style>
