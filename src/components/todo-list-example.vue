<template>
  <div class="todo-list-example">
    <form >
      <div class="indentation">
      <label>Добавить задачу
        <input v-model="newTodoText" class="new-todo"  placeholder="Например, покормить кота">
      </label>
      <span v-on:click.prevent="addNewTodo">
      <g-button-wave
        color="primary"
        size="button--size-m">
        Добавить
      </g-button-wave>
      </span>
      </div>
     <!--<button @click="addNewTodo">Добавить</button>-->
     <!-- <button @click="">del</button>-->
     <!-- <g-button-wave color="primary" size="button--size-m" @click="addNewTodo">Добавить</g-button-wave>-->
    </form>
  </div>
</template>

<script>
  export default {
    name: 'todo-list-example',
    data: function () {
      return {
        newTodoText: null
      }
    },
    methods: {
      addNewTodo: function () {
        this.$emit('addTask', {
          id: new Date().getTime(),
          task: 'new task',
          title: this.newTodoText
        })
      }
    }
  }
</script>

<style scoped>

.new-todo{
  border: 1px solid #ad9d80;
  width: 300px;
  height: 30px;
  background-color: white;
  border-radius: 7px;
}
  .indentation{
    margin-top: 30px;
  }
</style>
