<template>
  <div class="ml-5">
    <div class="text-center">
      <h3 class="mt-4">{{ this.$store.state.FullName }}</h3>
      <h4 class="mt-3">AllPosts :</h4>
    </div>
    <div class="mt-3">
      <p v-if="errorMsg">{{ errorMsg }}</p>
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-6">
          <div
            class="card mb-3 col-md-6"
            style="width: 28rem"
            v-for="(post, index) in $store.state.MyPosts"
            :key="index"
          >
            <div class="card-header p-4 bg-info">
              <i class="far fa-comment-alt" style="font-size: 24px"></i>
              PostTitle : {{ post.title }}
              <nuxt-link :to="{ name: 'Posts', params: { id: post.id } }"
                >viewpost details
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="col-md-4"></div>
      </div>
    </div>
  </div>
</template>

<script>
import UserHeader from '../components/UserHeader.vue'
export default {
  components: {
    UserHeader,
  },
  data() {
    return {
      errorMsg: '',
    }
  },
  async mounted() {
    await this.$store.dispatch('getMyPosts')
  },

  head() {
    return {
      title: 'User Home',
      meta: [
        {
          hid: 'UserHome',
          name: 'UserHeader',
          content: 'User Home Page',
        },
      ],
    }
  },
}
</script>

<style scoped>
body {
  background-color: cadetblue;
}
</style>



