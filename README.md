# vue-mastery-testing-app

Vue CLI 4 app for [Vue Mastery unit testing course](https://www.vuemastery.com/courses/unit-testing/what-to-test)

## Project setup

```
npm install
```

### Compile and hot-reload for development

```
npm run serve
```

### Compile and minify for production

```
npm run build
```

### Run unit tests

```
npm run test:unit
```

### Lint and fix files

```
npm run lint
npm run fix
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

Configuration settings used initially:

```
Vue CLI v4.3.0
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, Router, Vuex, Linter, Unit
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a linter / formatter config: Prettier
? Pick additional lint features: Lint on save, Lint and fix on commit
? Pick a unit testing solution: Jest
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? (y/N) N
```

When [Prettier](https://prettier.io/) is selected, Vue CLI also includes ESLint, which is unnecessary. Some additional configuration is needed to remove ESLint.
