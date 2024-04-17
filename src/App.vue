<template>
  <header-content></header-content>
  <landing-lage></landing-lage>
</template>

<script>
import headerVue from './layouts/header.vue'
import Landing from './pages/landing/landing.vue';
  export default{
    components : {
      "header-content" : headerVue,
      "landing-lage" : Landing,
    }
  }
</script>