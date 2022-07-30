# Create Typescript Application

Create a new Typescript application for the NodeJS runtime.

If something doesn’t work, please [file an issue](https://github.com/allisonmachado/create-typescript-application/issues/new).<br>

## Quick Overview

```sh
npx create-typescript-application
```

We recommend you run through npx so that you always uses the latest version.

## Creating an App

This project is built for the following NodeJs version:

```bash
$ node -v
v16.15.0
$ npm -v
8.5.5
```

It will create a new directory with the app name inside the current folder.
Inside that directory, it will generate the initial project structure:

```
my-new-app
├── README.md
├── tsconfig.json
├── package.json
├── .gitignore
├── .npmrc
├── .eslintrc.json
├── src
    └── setupTests.js
└── test
    └── setupTests.js
```

No configuration or complicated folder structures, only the files you need to start up your app.<br>
Once the installation is done, you can open your project folder:

```sh
cd my-new-app
```

Inside the newly created project, you can run some built-in commands:

```sh
npm install
npm run build
npm start
```

Run the tests

```sh
npm test
```

Builds the app

```sh
npm run build
```

## What’s Included?

Your environment will have everything you need to build a modern typescript application:

- Typescript config with reasonable and updated defaults
- Testing configuration with sinon, mocha and chai
- Lint configuration via eslint

## License

Create Typescript Application is open source software [licensed as MIT](https://github.com/allisonmachado/create-typescript-application/blob/main/LICENSE).
