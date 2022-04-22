<template>
  <div class="nav">
    <ul class="nav-item">
      <li class="nav-item">
        <nuxt-link class="nav-link" aria-current="page" to="/UserHome"
          >Home</nuxt-link
        >
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link" to="/CreatePost">CreatePost </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link" to="/UserProfile">Profile</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link" to="/">Logout</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>

<style scoped>
.nav {
  padding: 10px;
  background-color: rgb(124, 124, 179);
  /* color: aliceblue; */
}
.nav-item {
  display: flex;
  /* justify-content: space-evenly; */
  justify-content: space-between;
  color: rgb(122, 159, 191);
}
li {
  color: aliceblue;
  font-size: bold;
  text-decoration: none;
}
</style>
