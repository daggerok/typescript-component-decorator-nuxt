<template>
  <div class="app">
    <p>I'm {{ fullName }}, and I'm coding using {{ awesomeThings }}!</p>
  </div>
</template>

<script lang="ts">  // <--- THIS lang="ts" IS REALLY IMPORTANT!
import { Component, Prop, Vue } from 'vue-property-decorator';

interface User {
  firstName: string;
  lastName: number;
}

@Component
export default class UserView extends Vue {
  @Prop({ type: Object, required: true })
  readonly user!: User;

  awesomeThings: string = 'Nuxt.js and TypeScript';

  get fullName(): string {
    return `${this.user.firstName} ${this.user.lastName}`;
  }
}
</script>
