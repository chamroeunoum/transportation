<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import FooterComponent from './../../components/footer/copy-right.vue'
</script>

<template>
  <div class="flex justify-center">
    <div class="w-1/4 p-8 mt-24 border rounded">
      <div class="w-32 mx-auto my-4">
        <img src="./../../assets/logo.png" alt="SCT Logo" class="w-full" >
      </div>
      <div class="w-full mx-auto my-4 text-lg">
        Sony Cambodia Transportation
      </div>
      <div class="w-full mx-auto my-4 text-left text-md">
        Sign in
      </div>
      <van-cell-group inset>
        <van-field
          v-model="email"
          label="Email"
          placeholder="Email"
        />
        <van-field
          v-model="password"
          type="password"
          clearable
          label="Password"
          placeholder="Password"
        />
      </van-cell-group>
      <div class="w-full">
        <van-button type="primary" @click="this.$router.push('/dashboard') " class="w-1/2 mx-auto mt-8" size="small" :loading="btnLoginLoading" loading-text="Loading..." block>Sign in</van-button>
      </div>
      <div class="mt-16">
        <FooterComponent />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup(){
    const btnLoginLoading = ref(false)
    const email = ref("")
    const password= ref("")
    return {
      btnLoginLoading ,
      email ,
      password ,
    }
  },
  name: 'LoginTemplate'
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
