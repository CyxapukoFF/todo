<template>
  <li>
    {{ title }}
    <g-button-wave color="primary" size="button--size-m" v-on:click="$emit('remove')">Удалить</g-button-wave>
  </li>
</template>

<script>
  export default {
    props: ['title'],
    name: "todo-item"
  }
</script>

<style scoped>

</style>
