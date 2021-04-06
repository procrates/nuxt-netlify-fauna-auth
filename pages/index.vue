<template>
  <div class="max-w-3xl mx-auto p-2">
    <h3 class="text-2xl text-center mt-10">Home</h3>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      user: 'auth/user',
    }),
  },
  methods: {
    ...mapActions({
      openLogin: 'auth/openLogin',
      openSignup: 'auth/openSignup',
      logout: 'auth/logout',
    }),
  },
}
</script>
