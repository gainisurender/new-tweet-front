<template>
  <div>
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <div class="card p-4 mt-5">
          <div class="card-header text-center bg-primary mb-3">
            <h3>User Login</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="login">
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="formData.email"
                />
              </div>
              <br />
              <br />
              <div class="form-group">
                <label for="passcode">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="passcode"
                  v-model="formData.password"
                />
              </div>
              <br />
              <br />
              <div class="text-center mt-4">
                <button type="submit" class="btn btn-success">Login</button>
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
export default {
  name: 'UserLogin',
  data() {
    return {
      email: '',
      password: '',
      formData: {
        email: this.email,
        password: this.password,
      },
    }
  },
  methods: {
    async login() {
      console.log(this.formData)
      await this.$store.dispatch('login', this.formData)
      if (this.$store.state.ErrorMsg) {
        this.$router.push('/')
      }
      this.$router.push('/UserHome')
    },
  },
  head() {
    return {
      title: 'User Login Page',
      meta: [
        {
          hid: 'LoginPage',
          name: 'LoginPage',
          content: 'User Can Login Here',
        },
      ],
    }
  },
}
</script>

<style scoped>
.card p-4 mt-5 {
  align-content: center;
}
</style>