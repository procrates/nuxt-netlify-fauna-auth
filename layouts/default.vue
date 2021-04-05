<template>
  <div>
    <Nuxt />
  </div>
</template>
<script>
import attemptToAuthoriseTokens from '~/helpers/authorise-tokens'
export default {
  created() {
    this.$store.dispatch('auth/initAuth')

    attemptToAuthoriseTokens()
    console.log('created')
  },
}
</script>
