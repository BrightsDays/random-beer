<template>
  <transition name="slide-fade">
    <div v-if="loading" class="rb-loader" />
  </transition>
  <rb-header/>
  <rb-beer/>
</template>

<script lang="ts">
import {ref, computed, onMounted} from 'vue'
import {useStore} from 'vuex'
import RbHeader from './components/rb-header.vue'
import RbBeer from './components/rb-beer.vue'
import Request from './core/Request'

export default {
  components: {
    RbHeader,
    RbBeer
  },

  setup() {
    const store = useStore()
    let loading = ref(true)

    onMounted(async () => {
      await Request.send('https://random-data-api.com/api/users/random_user', 'getUser')
      await Request.send('https://random-data-api.com/api/beer/random_beer', 'getBeer')
      loading.value = false
    })

    return {
      userData: computed(() => store.state.userData),
      loading
    }
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Ubuntu, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--main);
  background: var(--background);
}
</style>
