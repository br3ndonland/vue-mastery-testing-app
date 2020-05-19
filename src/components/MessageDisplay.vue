<template>
  <p v-if="error" class="error" data-testid="message-error">{{ error }}</p>
  <p v-else data-testid="message">{{ message.text }}</p>
</template>
<script>
import { getMessage } from "@/services/axios.js"
export default {
  data() {
    return {
      message: {},
      error: null,
    }
  },
  async created() {
    try {
      this.message = await getMessage()
    } catch (e) {
      this.error = e.message
    }
  },
}
</script>
<style scoped>
.error {
  color: red;
}
</style>
