<template>
  <v-app dark>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; me</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'default',
    data () {
      return {
        fixed: undefined // prop will be reactive, fix vuetify component props
      };
    }
  });
</script>

<style scoped>

</style>
