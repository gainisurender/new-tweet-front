<template>
  <div>
    <UserHeader />
    <h3>{{ $route.params.id }}</h3>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6 mt-3">
        <table class="table table-hover table-responsive">
          <thead class="bg-info">
            <tr>
              <th scope="col" v-if="isVisible">
                <i class="far fa-comment-alt" style="font-size: 24px"></i>
                <input type="text" class="form-control" v-model="title" />
              </th>
              <th scope="col" v-else>
                <i class="far fa-comment-alt" style="font-size: 24px"></i>
                PostTitle : {{ $store.state.Post }}
              </th>
              <th
                scope="col"
                v-if="$store.state.PostUserId == $store.state.user_id"
              >
                <button
                  v-if="!isVisible"
                  class="btn btn-warning"
                  @click="visible"
                >
                  Update
                </button>

                <button v-else class="btn btn-success" @click="UpdatePost">
                  Submit
                </button>
              </th>
              <th v-if="$store.state.PostUserId == $store.state.user_id">
                <button
                  v-if="!isVisible"
                  class="btn btn-danger"
                  @click="DeletePost"
                >
                  Delete
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>Comments : </b>
              </td>
            </tr>
            <tr
              v-for="(comment, index) in $store.state.AllComments"
              :key="index"
            >
              <td>
                <i
                  class="fas fa-comment"
                  style="font-size: 18px; color: black"
                ></i>
                {{ comment.commentText }}
              </td>
              <td v-if="comment.userId == $store.state.user_id">
                <button
                  class="btn btn-button bg-danger"
                  @click="DeleteComment(comment.id)"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-4"></div>
    </div>
    <div>
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <div class="form-group">
            <label for="title">CommentPost</label>
            <input type="text" class="form-control" v-model="comment" />
          </div>

          <div class="text-center mt-4">
            <button type="submit" @click="CommentPost" class="btn btn-success">
              Comment
            </button>
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
  components: { UserHeader },
  head() {
    return {
      title: 'Single Post Page',
    }
  },

  data() {
    return {
      PostId: this.$route.params.id,
      title: '',
      comment: '',
      isVisible: false,
    }
  },
  async created() {
    await this.$store.dispatch('GetPostById', this.PostId)
    await this.$store.dispatch('getAllComments', this.PostId)
  },

  methods: {
    async DeletePost() {
      console.log('deletemethod called')
      await this.$store.dispatch('DeletePost', this.PostId)
      this.$router.push('/UserHome')
    },

    async CommentPost() {
      console.log(this.comment)
      await this.$store.dispatch('CommentPost', {
        comment: this.comment,
        postId: this.PostId,
      })
      await this.$store.dispatch('getAllComments', this.PostId)
      this.comment = ''
    },
    async DeleteComment(id) {
      await this.$store.dispatch('DeleteComment', id)
      await this.$store.dispatch('getAllComments', this.PostId)
    },
    visible() {
      this.isVisible = true
      this.title = this.$store.state.Post
    },
    async UpdatePost() {
      await this.$store.dispatch('UpdatePost', {
        postId: this.PostId,
        title: this.title,
      })
      this.isVisible = false
    },
  },
}
</script>

<style>
</style>