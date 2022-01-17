<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import FooterComponent from './../../components/footer/copy-right.vue'
import { Notify } from 'vant'
</script>

<template>
  <div class="flex justify-center">
    <div class="w-1/4 p-8 mt-24 border rounded">
      <div class="w-32 mx-auto my-4">
        <img src="./../../assets/logo.png" alt="SCT Logo" class="w-full" >
      </div>
      <div class="w-full mx-auto my-4 text-lg">
        ក្រុមហ៊ុន ដឹកជញ្ជូន សូនី កម្ពុជា<br/>
        Sony Cambodia Transportation
      </div>
      <div class="w-full mx-auto my-4 text-left text-md">ចូលប្រព័ន្ធ</div>
      <van-cell-group inset>
        <van-field
          v-model="auth.email"
          clearable
          label="អ៊ីមែល"
          placeholder="អ៊ីមែល"
          @keyup.enter="login"
        />
        <van-field
          v-model="auth.password"
          type="password"
          clearable
          label="ពាក្យសម្ងាត់"
          placeholder="ពាក្យសម្ងាត់"
          @keyup.enter="login"
        />
      </van-cell-group>
      <div class="w-full mt-4">
        <van-button type="primary" size="small" @click="login" :loading="btnLoginLoading" loading-text="កំពុងពិនិត្យ..." class="px-8" >ចូល</van-button>
      </div>
      <div class="mt-16">
        <FooterComponent />
      </div>
    </div>
  </div>
</template>
<script>
import './../../plugins/authentication'
export default {
  name: 'LoginTemplate' ,
  setup(){
    return {
      
    }
  },
  data(){ 
    return {
      auth: {
        email: '' ,
        password: '' ,
      },
      btnLoginLoading: false
    }
  },
  methods:{
    login(){
      if( this.auth.email == "" || this.auth.email == null ){
        Notify({
          type: 'warning' ,
          message: 'សូមបញ្ចូលអសយដ្ឋានសំបុត្ររបស់អ្នក។'
        })
        return false
      }
      if( this.auth.password == "" || this.auth.password == null ){
        Notify({
          type: 'warning' ,
          message: 'សូមបញ្ចូលពាក្យសម្ងាត់របស់អ្នក។'
        })
        return false
      }
      this.btnLoginLoading = true
      this.$store.dispatch('auth/login',{
        email: this.auth.email ,
        password: this.auth.password
      }).then( res => {
        switch( res.status ){
          case 200 :
            /**
             * Store the authenticated user into the store
             */
            this.$store.commit('auth/setAuthentication',{
              user: res.data.user ,
              token: res.data.token ,
            })
            
            Notify({
              type: 'success' ,
              message: "សួស្ដី, " + res.data.user.lastname + " " +  res.data.user.firstname
            })
            if( res.data.user.role == 1 ){
              this.$router.push('/dashboard')
            }else{
              this.$router.push('/receive')
            }
          break;
          default:
            Notify({
              type: 'warning' ,
              message: res.data.message
            })
            break;
        }
        this.btnLoginLoading = false
      }).catch( err => {
        console.log( err )
        this.btnLoginLoading = false
        if( err.response !== null ){
          let message = err.response.status + ": " + err.response.statusText + ". " 
          if( err.response.data !== null ){
            for(var key in err.response.data.errors ){
              message += err.response.data.errors[key]
            }  
          }
          Notify({
            type:'danger' ,
            message: message 
          })
        }else{
          console.log( err.response )
        }
      });
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 0.8rem;
}
</style>
