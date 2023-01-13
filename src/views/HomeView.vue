<template>
  <v-app class="test">
    <menu-component></menu-component>
    <header-component></header-component>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue';
import MenuComponent from "@/components/MenuComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";

// Components

export default defineComponent({
  name: 'HomeView',

  components: {
    HeaderComponent,
    MenuComponent
  },
});
</script>

<style>
.test {
  background: url(@/assets/sv1.svg) no-repeat center center fixed !important;
  background-size: cover;
}
</style>