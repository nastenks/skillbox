<template>
  <li class="catalog__item">
    <a class="catalog__pic" href="#">
      <img :src="xxx.image" :alt="xxx.title">
    </a>

    <h3 class="catalog__title">
      <a href="#">
        {{ xxx.title }}
      </a>
    </h3>

    <span class="catalog__price">
      {{ xxx.price }} ₽
    </span>

    <ul class="colors colors--black">
      <li class="colors__item">
        <label class="colors__label">
          <input class="colors__radio sr-only" type="radio" value="#222" v-model="color">
          <span class="colors__value" style="background-color: #222;">
          </span>
        </label>
      </li>
      <li class="colors__item">
        <label class="colors__label">
          <input class="colors__radio sr-only" type="radio" value="#FF6B00" v-model="color">
          <span class="colors__value" style="background-color: #FF6B00;">
          </span>
        </label>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'ProductItem',
  props: ['xxx'],
  data() {
    return {
      color: '#222',
    }
  }
};
</script>
