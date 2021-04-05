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
    detectEmailConfirmationToken()
    console.log('created')
  },
}
</script>
