# typescript-component-decorator-nuxt
Nutx.js TypeScript @Conponent decorator setup (+ Vuetify icons)

## generate new npm project from scratch:

```bash
mkdir typescript-nuxt-min
cd typescript-nuxt-min/
npm init -y
```

## IMPORTANT: install nux as dependency (not as devDependency!)
```bash
npm i -E nuxt vue-property-decorator material-design-icons-iconfont
```

## install `@nuxt/typescript-build` as dev dependency:

```bash
npm i -ED @nuxt/typescript-build @nuxtjs/vuetify css-loader nuxt-webfontloader svg-loader
```

## add npm-scripts in _package.json_ file:

```json
{
 "scripts": {
   "dev": "nuxt",
   "build": "nuxt build",
   "start": "nuxt start",
   "generate": "nuxt generate"
 }
}
```

## create _tsconfig.json_ file:

```json
{
 "compilerOptions": {
   "target": "es2018",
   "module": "esnext",
   "moduleResolution": "node",
   "lib": [
     "esnext",
     "esnext.asynciterable",
     "dom"
   ],
   "esModuleInterop": true,
   "allowJs": true,
   "sourceMap": true,
   "strict": true,
   "noEmit": true,
   "baseUrl": ".",
   "paths": {
     "~/*": [
       "./*"
     ],
     "@/*": [
       "./*"
     ]
   },
   "types": [
     "@nuxt/types",
     "vuetify" /* <-- IMPORTANT */
   ],
   "experimentalDecorators": true  /* <-- IMPORTANT */
 }
}
```

whre `@nuxt/types` should not be installed -- it's already packages together with `@nuxt/typescript-build`.

## create _nuxt.config.js_ file:

```js
export default {
 buildModules: [
   '@nuxt/typescript-build',
 ],
}
```

## create typescript vue layout

_layouts/default.vue_

```vue
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
  });
</script>
```

## create typescript vue component

_components/UserView.vue_

```vue
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
```

## create _pages/index.vue` file:

```vue
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
```

## resources

* https://github.com/vuetifyjs/vue-cli-plugin-vuetify/issues/112#issuecomment-562935079
* https://github.com/kaorun343/vue-property-decorator#-refrefkey-string-decorator
* https://typescript.nuxtjs.org/cookbook/components/#components
* https://codesandbox.io/s/github/nuxt/typescript/tree/master/examples/options-api/minimal?from-embed
