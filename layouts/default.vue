<template>
  <div>
    <Nuxt />
  </div>
</template>
<script>
export default {
  created() {
    this.$store.dispatch('auth/initAuth')

    console.log('created')
  },
}
</script>
