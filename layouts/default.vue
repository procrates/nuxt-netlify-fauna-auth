<template>
  <div>
    <Nuxt />
  </div>
</template>
<script>
import detectEmailConfirmationToken from '~/helpers/autorise-tokens'
export default {
  created() {
    this.$store.dispatch('auth/initAuth')
    detectEmailConfirmationToken()
    console.log('created')
  },
}
</script>
