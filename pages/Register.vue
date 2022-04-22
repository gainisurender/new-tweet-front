<template>
  <div>
    <AppHeader1 />
    <UserRegistration />

    <br />
  </div>
</template>

<script>
import AppHeader1 from '@/components/AppHeader1.vue'
import UserRegistration from '@/components/UserRegistration.vue'
export default {
  name: 'IndexPage',
  components: {
    AppHeader1,
    UserRegistration,
  },
}
</script>
