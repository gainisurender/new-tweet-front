<template>
  <div>
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <div class="card p-4 mt-5">
          <div class="card-header text-center text-dark bg-info mb-3">
            <h3>User Registration</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="UserRegistration">
              <div class="form-group">
                <label for="user_name">Full Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="user_name"
                  v-model="formData.full_name"
                />
              </div>
              <br />
              <br />
              <br />
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
                <button type="submit" class="btn btn-primary">Register</button>
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
  name: 'UserRegistration',
  head() {
    return {
      title: 'User Registration Page',
      meta: [
        {
          hid: 'RegistrationPage',
          name: 'RegistrationPage',
          content: 'User Can Registration Here',
        },
      ],
    }
  },
  data() {
    return {
      full_name: '',
      email: '',
      password: '',
      formData: {
        full_name: this.full_name,
        email: this.email,
        password: this.password,
      },
    }
  },
  methods: {
    UserRegistration() {
      console.log(this.formData)
      this.$store.dispatch('UserRegistration', this.formData)
      this.$router.push('/')
    },
  },
}
</script>

<style>
.form-control {
  margin-left: 10px;
}
</style>