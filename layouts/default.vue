<template>
  <div>
    <Nuxt />
  </div>
</template>
<script>
export default {
  created() {
    this.$store.dispatch('auth/initAuth')
    this.$detectTokens()
    console.log('created')
  },
}
</script>
