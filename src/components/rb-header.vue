<template>
  <header class="rb-header">
    <div class="rb-header__wrap">
        <div class="rb-header__user">
          <transition name="slide-fade">
            <img v-if="userImage" class="rb-header__avatar" :src="userImage" alt="avatar "/>
          </transition>
          <transition name="slide-fade">
            <span v-if="userName" class="rb-header__name">{{ userName }}</span>
          </transition>
        </div>
      <button class="rb-button" disabled>Logout</button>
    </div>
  </header>
</template>

<script lang="ts">
import {useStore} from 'vuex'
import {computed} from 'vue'

export default {
  setup () {
    const store = useStore()

    return {
      userImage: computed(() => store.state.user?.avatar),
      userName: computed(() => {
        return store.state.user?.first_name && store.state.user?.last_name ?
          store.state.user.first_name + ' ' + store.state.user.last_name :
          'Пользователь'
      })
    }
  }
}
</script>

<style lang="scss">
.rb-header {
  width: 100%;

  &__wrap {
    display: flex;
    width: 1000px;
    max-width: 100%;
    min-height: 50px;
    margin: 0 auto;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
  }

  &__user {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  &__avatar {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border: 2px solid var(--second);
    border-radius: 50%;
  }
}
</style>
