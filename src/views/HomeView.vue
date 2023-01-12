<template>
  <div>
    <MenuComponent></MenuComponent>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import MenuComponent from "@/components/MenuComponent.vue";

// Components

export default defineComponent({
  name: 'HomeView',

  components: {
    MenuComponent
  },
});
</script>
