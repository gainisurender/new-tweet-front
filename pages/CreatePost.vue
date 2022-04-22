<template>
  <div>
    <UserHeader />
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <div class="card p-4 mt-5">
          <div class="card-header text-center bg-info mb-3">
            <h3>Create Post</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="CreatePost">
              <div class="form-group">
                <label for="title">Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  v-model="formData.title"
                />
              </div>

              <div class="text-center mt-4">
                <button type="submit" class="btn btn-success">Post</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
import UserHeader from '../components/UserHeader.vue'
export default {
  component: {
    UserHeader,
  },
  data() {
    return {
      title: '',

      formData: {
        title: this.title,
      },
    }
  },
  methods: {
    async CreatePost() {
      await this.$store.dispatch('CreatePost', this.formData)
      this.$router.push('/UserHome')
    },
  },
  head() {
    return {
      title: 'Create Tweet Page',
    }
  },
}
</script>

<style>
</style>