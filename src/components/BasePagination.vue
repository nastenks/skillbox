<template>
  <ul class="catalog__pagination pagination">
      <li class="pagination__item">
        <button href="#" class="pagination__link pagination__link--arrow" :class="{'pagination__link--disabled': page <= 1}" :disabled="page <= 1" @click.prevent="pageLeft(page)" aria-label="Предыдущая страница">
          <svg width="8" height="14" fill="currentColor">
            <use xlink:href="#icon-arrow-left"></use>
          </svg>
        </button>
      </li>
      <li class="pagination__item" v-for="pageNumber in pages" :key="pageNumber">
        <a href="#" class="pagination__link" :class="{'pagination__link--current': pageNumber === page}" @click.prevent="paginate(pageNumber)">
          {{ pageNumber }}
        </a>
      </li>
      <li class="pagination__item">
        <button href="#" class="pagination__link pagination__link--arrow" :class="{'pagination__link--disabled': page === pages}" :disabled="page === pages" @click.prevent="pageRight(page)" aria-label="Следующая страница">
          <svg width="8" height="14" fill="currentColor">
            <use xlink:href="#icon-arrow-right"></use>
          </svg>
        </button>
      </li>
    </ul>
</template>

<script>

export default {
  model: {
    prop: 'page',
    event: 'paginate',
  },
  name: 'BasePagination',
  props: ['page', 'count', 'perPage'],
  methods: {
    paginate(page) {
      this.$emit('paginate', page);
    },
    pageLeft(page) {
      this.$emit('paginate', page - 1);
    },
    pageRight(page) {
      this.$emit('paginate', page + 1);
    },
  },
  computed: {
    pages() {
      return Math.ceil(this.count / this.perPage);
    },
  }
}
</script>
