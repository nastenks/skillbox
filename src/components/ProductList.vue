<template>
  <ul class="catalog__list">
    <ProductItem :xxx='item' v-for="(item, index) in products" :key="index"/>
  </ul>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  name: 'ProductList',
  props: ['products'],
  components: { ProductItem },
};
</script>
