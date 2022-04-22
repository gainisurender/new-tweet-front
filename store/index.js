const state = () => ({
  token: null,
  user_id: null,
  FullName: null,
  Email: null,
  MyPosts: [],
  AllComments: [],
  Post: null,
  PostUserId: null,
  PostId: null,
  ErrorMsg: null,

})

const getters = {}

const mutations = {
  setUser(state, data) {
    state.token = data.token
    state.user_id = data.id
    state.FullName = data.fullname
    state.Email = data.email
  },

  setList(state, data) {
    state.MyPosts = data
  },
  getComment(state, data) {
    state.AllComments = data
  },
  updatePost(state, data) {
    state.Post = data.title
  },
  getPost(state, data) {
    state.Post = data.title
    state.PostUserId = data.userId
    state.PostId = data.Id
  },
  createPost(state, data) {
    state.MyPosts.unshift(data)
  },
  updateUser(state, data) {
    state.FullName = data
  },
  setError(state, data) {
    state.ErrorMsg = data
  }
}

const actions = {
  async UserRegistration({ commit, state }, Data) {
    console.log(Data)
    try {
      const response = await this.$axios
        .post('user/register', Data)
        .then((res) => {
          console.log(res.data)

        })
    } catch (error) {
      console.log(error.response?.data ?? error.message)
      console.log(error)
      if(error.response.data){
        commit('setError', res.data)
      }
      throw error
    }
  },
  async login({ commit }, data) {
    console.log(data)
    try {
      const res = await this.$axios.post('user/login', data)
      console.log(res.data)
      commit('setUser', res.data)
      this.$axios.setHeader('Authorization', 'Bearer ' + res.data.token)
    } catch (error) {

      console.log(error)
      console.log('hai')
      if(error.response.data){
      console.log('hai')

        commit('setError',error.response.data)
        console.log(error.response.data)
      }
    }
  },

  async getMyPosts({ commit, state }) {
    const res = await this.$axios.get('post')
    console.log(res.data)
    commit('setList', res.data)
  },
  async getAllComments({ commit }, id) {
    const res = await this.$axios.get('comment/post_id?post_id=' + id)
    console.log(res.data)
    commit('getComment', res.data)
  },
  async GetPostById({ commit }, id) {
    console.log(id)
    const res = await this.$axios.get('post/post_id?post_id=' + id)
    console.log(res.data)
    commit('getPost', res.data)
  },

  async CreatePost({ commit, state }, data) {
    console.log(data)
    const res = await this.$axios.post('post', data)
    commit('createPost', res.data)
  },
  async CommentPost({ commit, state }, data) {
    console.log(data.comment)
    console.log(data.postId)
    const res = await this.$axios.post(
      'comment/post_id?post_id=' + data.postId,
      { commentText: data.comment }
    )
    console.log('Comment Created')
  },
  async UpdateUser({ commit }, data) {
    console.log(data)
    const res = await this.$axios.put('user/update', data)
    console.log(res, 'Updated')
    commit('updateUser', data.FullName)
  },
  async UpdatePost({ commit }, data) {
    console.log(data)
    const res = await this.$axios.put('post/' + data.postId, {
      title: data.title,
    })
    console.log(res, 'Updated')
    commit('updatePost', data)
  },

  async DeletePost({ commit }, id) {
    console.log(id)
    const res = await this.$axios.delete('post/' + id)
    console.log(res, 'delete')
  },
  async DeleteComment({ commit }, id) {
    console.log(id)
    const res = await this.$axios.delete('comment/' + id)
    console.log(res, 'delete')
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
