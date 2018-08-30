// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueButtonEffect from 'vue-button-effect'
import DatePicker from 'vue-md-date-picker'
import Vuelidate from 'vuelidate'

import topBar from './components/top-bar.vue'
import todoItem from './components/todo-item'
import delItem from './components/del-item'
import todoListExample from './components/todo-list-example'
import Bell from './components/bell'
import topButtons from './components/top-buttons'
import Counts from './components/counts'
import Search from './components/search'
import editButton from './components/edit-btn'
import newForm from './components/new-form'
import { required, minLength } from 'vuelidate/lib/validators'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'


Vue.config.productionTip = false
Vue.use(vueButtonEffect)
Vue.component('date-picker', DatePicker)
Vue.use(Vuelidate)
Vue.use(Vuetify)
Vue.use(Vuetify, {
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
})



Vue.component('top-bar', topBar)
Vue.component('top-buttons', topButtons)
Vue.component('todo-item', todoItem)
Vue.component('del-item', delItem)
Vue.component('todo-list-example', todoListExample, {})
Vue.component('bell', Bell)
Vue.component('counts', Counts)
Vue.component('search', Search)
Vue.component ('edit-btn', editButton)
Vue.component('new-form', newForm)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App :todos="todos"/>',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'Помыть посуду'
      },
      {
        id: 2,
        title: 'Вынести мусор'
      },
      {
        id: 3,
        title: 'Подстричь газон'
      }
    ],
    nextTodoId: 4,

  },



})
