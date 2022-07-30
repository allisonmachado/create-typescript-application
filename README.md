# Create Typescript Application

Quickly create a new Typescript application for the NodeJS runtime.

## Quick Overview

```sh
npx create-typescript-application
```

We recommend running through npx so that you always use the latest version.

## Creating an App

**You’ll need to have NodeJS version ^16 (npm version ^8) on your local development machine**, and the created application will be targeted to the this NodeJS version as well.

It will create a new directory with the chosen app name inside the current folder. The application project structure is like:

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

## What’s Included?

Your environment will have everything you need to build a modern typescript application:

- Typescript config with reasonable and updated defaults
- Testing configuration via sinon, mocha and chai
- Lint configuration via eslint and typescript plugins

## Issues

If something doesn’t work, please [file an issue](https://github.com/allisonmachado/create-typescript-application/issues/new).<br>

## License

Create Typescript Application is open source software [licensed as MIT](https://github.com/allisonmachado/create-typescript-application/blob/main/LICENSE).
