<template>
  <form @submit.prevent="onSubmit">
    <input data-testid="input-name" type="text" v-model="name" />
    <button type="submit">Submit</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      name: "",
    }
  },
  methods: {
    onSubmit() {
      this.$emit("formSubmitted", { name: this.name })
    },
  },
}
</script>
<style scoped></style>
