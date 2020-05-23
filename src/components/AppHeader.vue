<template>
  <div>
    <button v-show="loggedIn">Logout</button>
    <message-container />
  </div>
</template>

<script>
import MessageContainer from "@/components/MessageContainer.vue"
export default {
  components: {
    "message-container": MessageContainer,
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
