<template>
  <div>
    <div class="alert alert-danger" role="alert">
      {{ Error }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['Error'],
  name: 'ErrorMsg',
}
</script>

<style scoped>
</style>