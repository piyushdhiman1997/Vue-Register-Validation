<template>
 
  <router-view/>
</template>

<script>
import home from "@/views/HomeView.vue"
export default {
  name: "app",
  components: home,
};
</script>
