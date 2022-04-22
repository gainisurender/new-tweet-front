<template>
  <div>
    <UserHeader v-if="$store.state.token != null" />
    <AppHeader v-else />
    <Home v-if="$store.state.token != null" />
    <div v-else class="text-center mt-5">
      <h1 class="bg-danger p-3">Invalid Login Details</h1>
    </div>
  </div>
</template>

<script>
import UserHeader from '../components/UserHeader.vue'
import AppHeader from '../components//AppHeader.vue'
import Home from '../components/Home.vue'
export default {
  components: {
    UserHeader,
    AppHeader,
    Home,
  },
}
</script>

<style>
</style>
