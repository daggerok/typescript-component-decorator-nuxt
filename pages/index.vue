<template>
  <v-layout>
    <v-flex class="text-center">
      <h1>Hello World!</h1>
      <v-btn>
        <v-icon>email</v-icon>
      </v-btn>
      <UserView :user="{firstName: 'Maks', lastName: 'Imko'}"/>
    </v-flex>
  </v-layout>
</template>
<!-- THIS lang="ts" IS REALLY IMPORTANT! -->
<script lang="ts">
  // import { VWindow } from 'vuetify';
  import { Component, Ref, Vue } from 'vue-property-decorator';
  import UserView from '~/components/UserView.vue';

  interface User {
    firstName: string;
    lastName: number;
  }

  @Component({
    components: { UserView }
  })
  export default class IndexPage extends Vue {
    @Ref() readonly userView!: UserView;
  }
</script>
