<template>
  <div id="app">
    <div class="top-top">
    <top-bar @addTask="addNewTask">
      <div @click="showTask = 2">
        <g-button-wave
          color="primary"
          size="button--size-m">
          Выполненные задачи
        </g-button-wave>
      </div>
      <div @click="showTask = 3">
        <g-button-wave
          color="primary"
          size="button--size-m">
          Не выполненные задачи
        </g-button-wave>
      </div>
      <div @click="showTask = 1">
        <g-button-wave
          color="primary"
          size="button--size-m">
          Все задачи
        </g-button-wave>
      </div>
    </top-bar>
    </div>
    <counts/>

    <!-- {{todoList}}-->
    <div class="section">
      <ul>
        <li v-for="t in showedTasks">
          <div class="section-separation">
            <div class="ttl">
              <div class="ttl-stl"> {{t.title}}</div>
              {{t.date}}<br>
              {{t.description}}<br>
            </div>

            <div class="butn">

        <span class="remov" @click="removeTask(t)">
          <g-button-wave
            color="primary"
            size="button--size-m">
          Удалить
      </g-button-wave>
       </span>

              <span class="edt" id="edit-btn" @click="editTask(t)">
          <g-button-wave
            color="primary"
            size="button--size-m">
          Изменить
      </g-button-wave>
        </span>
              <div class="well-done">
                <div v-if="t.done === false">
                  <span @click="congratulationsTask(t)">
                    <g-button-wave
                      color="primary"
                      size="button--size-m">
                    Решить задачу
                    </g-button-wave>
                  </span>
                </div>
                <div class="complete" v-else>
                  <!-- <g-button-wave
                     color="success"
                     size="button--size-m">-->
                  Задача выполнена
                  <!--   </g-button-wave>-->
                </div>

              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <edit-btn
      v-if="showModal"
      :task="editableTask"
      @close="showModal = false"
      v-on:save="saveTask">
    </edit-btn>

  </div>

</template>


<script>
  const ALL_TASK = 1
  const DONE_TASK = 2
  const UNRESOLVED_TASK = 3

  import index from './router'

  import {required, minLength} from 'vuelidate/lib/validators'

  import localStorageAPI from './untils'

  export default {
    name: 'do-list',
    props: [
      'todos','error','save'
    ],

    data: function () {
      // CloseFrm: false
      return {
        todoList: localStorageAPI.getTask(),
        showModal: false,
        editableTask: null,
        date: null,
        show: false,
        description: null,
        congratulations: true,
        done: false,
        submitStatus: null,
        showTask: ALL_TASK,

        }
    },

    methods: {
      addNewTask (task) {
        this.showModal = true
        this.editableTask = task
        task.done = false
      },
      removeTask (task) {
        console.dir(task)
        let index = this.todoList.indexOf(task)
        console.dir(index)
        this.todoList.splice(index, 1)
        localStorageAPI.saveTask(this.todoList)
      },

      // CloseForm (task) {
      // console.dir(task)
      //},
      editTask (task) {
        this.showModal = true
        this.editableTask = task


      },
      saveTask (task) {
        let index = this.todoList.findIndex(t => t.id === task.id)
        if (index > -1) {
          this.todoList[index] = task
        } else {
          this.todoList.push(task)
        }
        this.showModal = false
        localStorageAPI.saveTask(this.todoList)
      },
      cancelTask () {
        this.showModal = true
        this.editableTask = null
      },
      congratulationsTask (task) {
        task.done = true
        localStorageAPI.saveTask(this.todoList)
      }
    },
    computed: {
      showedTasks () {
        if (this.showTask === DONE_TASK) {
          return this.todoList.filter((task) => task.done)
        } else if (this.showTask === UNRESOLVED_TASK) {
          return this.todoList.filter((task) => !task.done)
        }
        return this.todoList;
      }
    },
    mounted() {
      this.$nextTick(function () {
      return this.$el.date;
      return this.$el.title
      })
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: #b5ced8;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .butn {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .ttl {
    width: 250px;
    margin-right: 50px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 15px 20px;
    text-align: center;
    overflow: hidden;

  }

  li {
    list-style-type: none;
  }

  .section-separation {
    display: flex;
    flex-direction: row;
  }

  .ttl-stl {
    font-weight: bold;
  }

  .complete {
    display: flex;
    background-color: aquamarine;
    height: 35px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    align-content: center;
  }


</style>
