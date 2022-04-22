<template>
  <div>
    <AppHeader />
    <ErrorMsg v-if="$store.state.ErrorMsg" :Error="$store.state.ErrorMsg" />
    <UserLogin />

    <br />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import UserLogin from '@/components/UserLogin.vue'
export default {
  name: 'IndexPage',
  components: {
    AppHeader,
    UserLogin,
  },

  head() {
    return {
      title: 'TweeterClone App',
      meta: [
        {
          name: 'description',
          content: 'Get all  Latest Tweets By Register',
        },
      ],
    }
  },
}
</script>
