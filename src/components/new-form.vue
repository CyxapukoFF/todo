<template>
  <transition>
    <div class="new-mask">
      <div class="new-wrp">
        <div class="new-container">
          <h3 slot="header">Новая Задача</h3>
          <div class="date-calendar">
            <input type="text" @focus="shownew = true" readonly v-model="editTask.date">
            <date-picker v-model="editTask.date" @close="shownew = false" v-if="shownew">
            </date-picker>
          </div>

          <textarea type="text" class="new-txt-input" v-model="editTask.title"></textarea>
          <span class="new-mdl-cancel-btn" @click="$emit('close', cancelTask)">
                   <g-button-wave color="primary" size="button--size-m">Отменить</g-button-wave>
               </span>
          <span class="new-mdl-def-btn" @click="$emit('close', editTask)">
                    <g-button-wave color="primary" size="button--size-m">Применить</g-button-wave>
                  </span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'new-form',
    props: ['task'],
    data () {
      return {
        CloseFrm: false,
        editTask: Object.assign({}, this.task),
        cancelTask: Object.assign({}, this.task),
        shownew: false
      }
    }
  }
</script>

<style scoped>

  .new-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    display: table;
    transition: opacity .3s ease;
  }

  .new-wrp {
    display: table-cell;
    vertical-align: middle;
  }

  .new-container {
    width: 500px;
    height: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgb(102, 102, 153);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  h3 {
    margin-top: 0;
    color: #696969  ;
  }

  .new-mdl-def-btn {
    float: right;
  }

  .new-mdl-def-btn {
    margin-right: 160px;

  }

  .new-txt-input {
    margin-top: 15px;
    width: 400px;
    height: 150px;
  }



</style>
