<template>
  <div>
    <UserHeader />
    <div class="row">
      <div class="col-md-4"><h1></h1></div>
      <div class="col-md-5 mt-5 p-3">
        <table class="table table-hover table-responsive">
          <thead>
            <tr>
              <th>
                <b>UserDetails :</b>
              </th>
            </tr>
            <tr>
              <th scope="col" v-if="isVisible">
                <input type="text" class="form-control" v-model="FullName" />
              </th>
              <th scope="col" v-else>
                <i class="fa fa-user" style="font-size: 24px"></i>
                <b> FullName</b> : {{ FullName }}
              </th>
              <th scope="col">
                <button v-if="!isVisible" @click="visible" class="bg-info">
                  <i class="fa fa-edit" style="font-size: 16px"></i>Update
                </button>

                <button v-else class="btn btn-success" @click="UpdateUser">
                  Submit
                </button>
              </th>
            </tr>
            <tr>
              <th>
                <i
                  class="fa fa-envelope"
                  style="font-size: 24px; color: red"
                ></i>
                <b> Email</b>
                :
                {{ Email }}
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
import UserHeader from '../components/UserHeader.vue'
import { mapState } from 'vuex'

export default {
  components: { UserHeader },
  data() {
    return {
      FullName: this.$store.state.FullName,
      isVisible: false,
    }
  },
  computed: {
    ...mapState(['FullName', 'Email']),
  },
  methods: {
    visible() {
      this.isVisible = true
      this.FullName = this.$store.state.FullName
    },
    UpdateUser() {
      this.isVisible = false
      console.log(this.FullName)
      this.$store.dispatch('UpdateUser', { full_name: this.FullName })
    },
  },
}
</script>

<style  scoped>
</style>>
