<template>
  <transition>
    <v-app id="inspire">

    <div class="mask">
      <div class="wrp">
        <div class="container">
          <h3 slot="header">Задача</h3>

          <div class="date-calendar">
         <!--      <input type="text"
                     @focus="show = true"
                     readonly
                     v-model="editTask.date"
                     placeholder="Дата выполнения задачи">
              <!--<date-picker
                v-model="editTask.date"
                @close="show = false"
                v-if="show">
              </date-picker>-->



            <v-layout row wrap>
              <v-flex xs12 sm6  md6>
                <v-dialog
                  ref="dialog"
                  v-model="modal"
                  :return-value.sync="editTask.date"
                  persistent
                  lazy
                  full-width
                  width="290px">
                  <v-text-field
                    slot="activator"
                    v-model="editTask.date"
                    label="Выберите дату"
                    placeholder="Дата"
                    readonly>
                  </v-text-field>
                  <v-date-picker
                    v-model="date"
                    scrollable>
                    <v-btn
                      flat color="primary"
                      @click="modal = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      flat color="primary"
                      @click="$refs.dialog.save(date)">
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-flex>
            </v-layout>
         </div>

          <form @input.prevent="submit">
            <div class="form-group" :class="{ 'form-group--error': $v.title.$error }">
              <label class="form__label">Заголовок</label>
              <input class="form__input" placeholder="Заглавие задачи" v-model.trim="$v.title.$model" @input="setTitle($event.target.value)"/>
            <!--  {{$v.title.$error}}-->

            </div>
            <div class="error" v-if="!$v.title.required">Title is required</div>
            <div class="error" v-if="!$v.title.minLength">Title must have at least {{$v.title.$params.minLength.min}} letters.</div>

            <textarea
              placeholder="Описание задачи"
              type="text" class="txt-input"
              v-model="editTask.description">
          </textarea>



            <span
              class="button"
              type="submit"
              v-if="submitStatus !== 'ERROR'"
              @click="$emit('save', editTask)">
             <!-- v-if="submitStatus !== 'ERROR'"-->
              <!--@saveTask="saveTask">-->
               <g-button-wave
                 color="primary"
                 size="button--size-m">
                   Применить
               </g-button-wave>
            </span>

            <span
              class="mdl-cancel-btn"
              @click="$emit('close')">
                   <g-button-wave
                     color="primary"
                     size="button--size-m">
                     Отменить
                   </g-button-wave>
               </span>

            <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
            <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
            <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
          </form>

        </div>
      </div>
    </div>
    </v-app>

  </transition>




</template>

<script>
  import { required, minLength} from 'vuelidate/lib/validators'


  export default {
    name: 'edit-form',
    props: ['task','error',],

    data () {
      return {
        CloseFrm: false,
        editTask: Object.assign({}, this.task),
        cancelTask: Object.assign({}, this.task),
        show: false,
        submitStatus: 'ERROR',
        name: '',
        age: 0,
        title:'',
        showModal: true,
        picker: null,
        landscape: false,
        reactive: false,
        menu: false,
        modal: false,
        menu2: false,
        date:this.date,
      }
    },
    validations: {
      title: {
        required,
        minLength: minLength(1)
      },
      date: {
        required
      },

   },


    methods: {
      setTitle (value){
        this.editTask.title = value
       this.$v.title.$touch()
      },



      submit() {
        //console.log('submit!')
        this.$v.$touch()
        if (this.$v.$invalid) {
          this.submitStatus = 'ERROR'
        } else {
          // do your submit logic here
          this.submitStatus = 'PENDING'
          setTimeout(() => {
            this.submitStatus = 'OK'
          }, 500)
        }
       // return this.editTask.title

         // this.$emit('save', this.editTask)//, {title: this.task})
      },
    },

    mounted() {
        this.setTitle();
        this.submit();
    }

    //  this.$el.date;
      //this.$el.title;
    }





</script>


<style scoped>
  input, textarea{
    width: 100%;
    resize:none;
  }
  .mask {
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

  .wrp {
    display: table-cell;
    vertical-align: middle;
  }

  .container {
    width: 500px;
    height: 450px;
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

  .button {
    float: right;
  }

  .mdl-cancel-btn {
    float: left;

  }

  .txt-input {
    margin-top: 15px;
    height: 150px;
    border-radius: 5px;
    border-color: aqua;

  }
  .date-calendar{
    border-radius: 5px;
  }

</style>
