<template>


<div class="top-buttons">
    <span v-on:click.prevent="addNewNewTodo">
      <g-button-wave
        color="primary"
        size="button--size-m">
        Добавить задачу
      </g-button-wave>
    </span>

  <new-form v-if="shownewModal"
            :task="editableTask"
            @close="saveTask">
  </new-form>

  </div>


</template>

<script>


  export default {
    name: 'top-buttons',
    props: ['todoList'],
    data: function () {
      return {
        newTodoText: null,
        shownewModal: false,
        editableTask: null,
        date: null,
        show: false


      }
    },
    methods: {
      addNewNewTodo: function () {
        this.$emit('addTask', {
          id: new Date().getTime(),
          task: 'new task',
          title: this.newTodoText
        })
      },
      addNewTask (task) {
        console.dir(task)
        this.todoList.push(task)
        localStorageAPI.saveTask(this.todoList);

      }


    },
    computed:{
      completeTask:
        function () {
         // removeFromList(id)
         return this.todoList.filter(function (task) {
          console.log(this.todoList)
            //this
          return  task.done
        });
      },

      dontCompleteTask: function () {
         return this.todoList.filter(function (task) {
        return  !task.done
        });
      },

      allTask: function() {
        return this.todoList.filter(function (task) {
          return  todoList
        });
      }
    }



  }
</script>

<style scoped>

  .top-buttons{
    height: 35px;
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    algn-content:center;
    align-items: center;

  }

</style>
