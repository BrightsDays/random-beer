<template>
  <div class="rb-beer">
    <h1 v-if="beer">Рекомендуем: </h1>
    <h1 v-else>Пока нечего рекомендовать =(</h1>
    <div v-if="beer" class="rb-beer__content">
      <img class="rb-beer__image" src="../assets/beer.jpg" alt="beer" />
      <div class="rb-beer__info">
        <h2 class="rb-beer_name">{{ beer.name}}</h2>
        <p><b>Бренд:</b> {{ beer.brand }}</p>
        <p><b>Сорт:</b> {{ beer.style }}</p>
        <p><b>Хмель:</b> {{beer.hop}}</p>
        <p><b>Дрожжи:</b> {{beer.yeast}}</p>
        <p><b>Солод:</b> {{beer.malts}}</p>
        <p><b>IBU:</b> {{beer.ibu}}</p>
        <p><b>Алкоголь:</b> {{beer.alcohol}}</p>
      </div>
    </div>
    <button
        v-if="beer"
        class="rb-button"
        @click="getBeer()"
    >Попробовать что-нибудь другое</button>
  </div>
</template>

<script lang="ts">
import {useStore} from "vuex";
import {computed} from "vue";
import Request from "../core/Request";

export default {
  setup () {
    const store = useStore()

    return {
      beer: computed(() => store.state.beer),
      getBeer: async () => await Request.send('https://random-data-api.com/api/beer/random_beer', 'getBeer')
    }
  }
}
</script>

<style lang="scss">
.rb-beer {
  width: 1000px;
  max-width: 100%;
  margin: 0 auto;
  padding: 30px 20px;

  &__content {
    display: flex;
    margin: 40px 0;
    flex-direction: row;
    gap: 30px;
    @media (max-width: 660px) {
      flex-direction: column;
      align-items: center;
    }
  }

  &__image {
    width: 50%;
    max-width: 100%;
    object-fit: cover;
    @media (max-width: 660px) {
      width: 300px;
    }
  }

  &__info {
    width: 50%;
    max-width: 100%;
    text-align: left;
    @media (max-width: 660px) {
      width: 300px;
    }
  }
}
</style>
