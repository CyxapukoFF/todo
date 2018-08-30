<template>
  <div class="top-bar">
   <search/>
    <top-buttons @addTask="addTask"/>
    <slot></slot>
    <new-form v-if="shownewModal"
              :task="editableTask"
              @close="saveTask">
    </new-form>
  </div>
</template>

<script>
  export default {
    name: 'top-bar',
    data () {
      return {
        shownewModal: false,
        editableTask: null
      }
    },
    methods: {
      addTask(task){
        this.$emit("addTask", task)
      }
    }
  }
</script>

<style scoped>
  .top-bar {
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    border-bottom: 1px solid red;
  }

</style>
