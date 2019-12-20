<template>
  <div class="app">
    <p>I'm {{ fullName }}, and I'm coding using {{ awesomeThings }}!</p>
  </div>
</template>

<!-- THIS lang="ts" IS REALLY IMPORTANT! -->
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

interface User {
  firstName: string;
  lastName: number;
}

@Component({
  name: 'UserView',
})
export default class UserView extends Vue {
  @Prop({ type: Object, required: true })
  readonly user!: User;

  awesomeThings: string = 'Nuxt.js and TypeScript';

  get fullName(): string {
    return `${this.user.firstName} ${this.user.lastName}`;
  }
}
</script>
