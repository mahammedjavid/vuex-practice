<template>
    <section>
      <h2>Your Cart</h2>
      <h3>Total Amount: <base-badge mode="elegant">${{ cartTotal }}</base-badge></h3>
      <ul>
        <cart-item
          v-for="item in allCartItem"
          :key="item.productId"
            :cartItem="item"
        ></cart-item>
      </ul>
    </section>
  </template>
  
  <script>
import cartItemVue from './cartItem.vue';
  
  export default {
    components: {
      "cart-item" : cartItemVue,
    },
    computed: {
      cartTotal() {
        return this.$store.getters['cartStore/cartTotal']
      },
      allCartItem(){
        return this.$store.getters['cartStore/allCartItem']
      }
    }
  };
  </script>
  
  <style scoped>
  section {
    margin: 2rem auto;
    max-width: 40rem;
  }
  
  h2 {
    color: #292929;
    text-align: center;
    border-bottom: 2px solid #ccc;
    padding-bottom: 1rem;
  }
  
  h3 {
   text-align: center;
  }
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  </style>