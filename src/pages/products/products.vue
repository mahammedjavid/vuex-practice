<template>
  <section>
    <ul>
      <product-item
        v-for="prod in products"
        :key="prod.id"
        :product="prod"
      ></product-item>
    </ul>
  </section>
</template>

<script>
import ProducItems from "./produc-items.vue";

export default {
  components: {
    "product-item": ProducItems,
  },
  computed: {
    products() {
        return this.$store.getters['productStore/getProducts']
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 40rem;
}
</style>
