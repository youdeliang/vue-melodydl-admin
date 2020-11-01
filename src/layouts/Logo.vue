<template>
  <div class="app-logo">
    <img :src="logo" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import logo from '@/assets/images/logo.png';

  export default defineComponent({
    setup() {
      return {
        logo,
      };
    },
  });
</script>
