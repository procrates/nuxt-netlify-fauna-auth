<template>
  <div>
    <Nuxt />
  </div>
</template>
<script>
import detectEmailConfirmationToken from '~/helpers/authorise-tokens'
export default {
  created() {
    this.$store.dispatch('auth/initAuth')
    console.log('created')
  },
  mounted() {
    detectEmailConfirmationToken()
  },
}
</script>
