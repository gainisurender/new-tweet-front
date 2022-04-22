<template>
  <div class="nav">
    <ul class="nav-item">
      <li>
        <nuxt-link class="nav-link" aria-current="page" to="/UserHome"
          >Twitter</nuxt-link
        >
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link" to="/Register">Register</nuxt-link>
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
  background-color: rgb(157, 157, 216);
  /* color: aliceblue; */
}
.nav-item {
  display: flex;
  /* justify-content: space-evenly; */
  justify-content: space-between;
  color: aliceblue;
}
li {
  color: aliceblue;
  font-size: bold;
  text-decoration: none;
}
</style>
