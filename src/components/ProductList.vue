<template>
  <ul class="catalog__list">
      <!-- <ProductItem /> -->
      <ProductItem :xxx='item' v-for="(item, index) in products" :key="index"/>
  </ul>
</template>

<script>
import products from '../data/products';
import ProductItem from './ProductItem.vue';

export default {
  name: 'ProductList',
  components: { ProductItem },
  data() {
    return {
      products,
    };
  },
};
</script>
