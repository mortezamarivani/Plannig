<template>
  <div >
      <div class=" clearfix shadow-sm p-3  bg-body rounded" >
              <form action="#">
                <div style="display: flex;justify-content: flex-start;flex-direction: column;align-items: center;">
                  <div class="row">
                    <div class="col-md-12">
                        <md-field md-clearable >
                              <label>Please Enter Email</label>
                              <md-input type="email" v-model="Email" class="inputstyle"
                                  @input="$v.Email.$touch()"
                                  :class="{invalid:$v.Email.$error  }"
                              ></md-input>
                            <span class="md-error" v-if="!$v.Email.required && $v.Email.$dirty">Please Enter Email</span>
                            <span class="md-error" v-if="!$v.Email.minLength">minLength charater : {{$v.Email.$params.minLength.min}}</span>
                        </md-field>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                        <md-field md-clearable >
                            <label>Please Enter Password</label>
                            <md-input type="password" v-model="Password" class="inputstyle"
                                      @input="$v.Password.$touch()"
                                      :class="{invalid:$v.Password.$error}"
                            ></md-input>
                            <span class="md-error" v-if="!$v.Password.required && $v.Password.$dirty ">Please Enter Password</span>
                            <span class="md-error" v-if="!$v.Password.maxLength">maxLength charater : {{$v.Password.$params.maxLength.max}}</span>
                        </md-field>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <p
                        class="text-danger"
                        v-if="!$v.Password.required && $v.Password.$dirty"
                      >Please Enter </p>
                      <p
                        class="text-danger"
                        v-if="!$v.Password.maxLength"
                      >maxLength charater : {{$v.Password.$params.maxLength.max}}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <a
                        @click.prevent="LoginUser()"
                        class="btn btn-success"
                        :disabled="$v.$invalid"
                      >Login</a>
                      <!--<router-link to="/SkillsList" active-class="active" class="btn btn-success">List</router-link>-->
                      token:{{token}}
                    </div>
                  </div>
                </div>
          </form>
      </div>
  </div>
</template>

<script>

import {
  required,
  maxLength,
  email,
  minLength,
  sameAs
} from "vuelidate/lib/validators";

export default {
  components: {
  },

  data() {
    return {
      Email:'morteza.marivani@yahoo.com',
      Password:'Morteza@123456',
      UserName:'',
      token:""
    };
  },

  methods: {
      LoginUser(){
        const user = {
          email : this.Email,
          password : this.Password,
          UserName : this.Email
        }
        this.$store.dispatch("LoginUser",user);
        this.token= this.$store.getters.IsUserAuthenticated;
      }

  }, //methods

  validations: {
    Email: {
      required,
      maxLength: maxLength(100),
      minLength: minLength(5)
    },
    Password: {
      maxLength: maxLength(50),
      minLength: minLength(5),
      required
    }
    
  } //validations
}; //default
</script>

<style>
.invalid {
  border: 1px solid red !important;
  box-shadow: 0 0 1px red !important;
  background-color: lightpink !important;
  height: 45px;
}

.panelLogin{
      margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;

}
</style>
