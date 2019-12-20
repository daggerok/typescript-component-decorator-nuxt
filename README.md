# typescript-component-decorator-nuxt
Nutx.js TypeScript @Conponent decorator setup

## generate new npm project from scratch:

```bash
mkdir typescript-nuxt-min
cd typescript-nuxt-min/
npm init -y
```

## IMPORTANT: install nux as dependency (not as devDependency!)
```bash
npm i -E nuxt
```

## install `@nuxt/typescript-build` as dev dependency:

```bash
npm i -ED @nuxt/typescript-build
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
     "@nuxt/types"
   ],
   "experimentalDecorators": true
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

## create _pages/index.vue` file:

```vue
<template>
 <div class="app">
   <h1>Hello, {{ id }}!</h1>
 </div>
</template>
<!-- THIS lang="ts" IS REALLY IMPORTANT! -->
<script lang="ts">
    import Vue from 'vue';
    export default Vue.extend({
        data() {
            const id: string = 'TypeScript';
            return {
                id,
            };
        }
    }); 
</script>
```

## resources

* https://github.com/vuetifyjs/vue-cli-plugin-vuetify/issues/112#issuecomment-562935079
* https://github.com/kaorun343/vue-property-decorator#-refrefkey-string-decorator
* https://typescript.nuxtjs.org/cookbook/components/#components
* https://codesandbox.io/s/github/nuxt/typescript/tree/master/examples/options-api/minimal?from-embed
