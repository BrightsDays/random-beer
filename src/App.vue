<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <p>Store: {{auth}}</p>
<!--  <x-auth-page v-if="appStatus === 'unauthorized'"-->
<!--               login-url="user/login"-->
<!--               password-reset-url="user/password-reset"-->
<!--  />-->

<!--  <x-layout-authorized v-if="appStatus === 'authorized'"-->
<!--                       :permissions-per-links="permissionsPerLinks"-->
<!--                       :nav-btns="navBtns"-->
<!--  >-->
<!--    <router-view/>-->
<!--  </x-layout-authorized>-->
  <router-view />
</template>


<script lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    console.log(store)

    return {
      auth: computed(() => store.state.auth)
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
  margin-top: 60px;
}
</style>
