<template>
  <div>
    <Nuxt />
  </div>
</template>
<script>
export default {
  created() {
    this.$store.dispatch('auth/initAuth')
    this.$detectEmailConfirmationToken()
    console.log('created')
  },
}
</script>
