<template>
  <div>
    <Nuxt />
  </div>
</template>
<script>
import store from 'vuex'
import attemptToAuthoriseTokens from '~/helpers/authorise-tokens'
export default {
  created() {
    store.dispatch('auth/initAuth')

    attemptToAuthoriseTokens()
  },
}
</script>
