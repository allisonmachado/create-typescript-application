# Create Typescript Application

Quickly create a new [Typescript][1] application for the [NodeJS][2] runtime. :rocket:

## Quick Overview

```sh
npx create-typescript-application
```

We recommend running through [npx][8] so that you always use the latest version.

## Creating an App

Executing `npx create-typescript-application` creates a new directory with the chosen app name inside the current folder and install the basic template dependencies via npm. 

The new application project structure looks like:

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
└── node_modules
    └── ...
```

Once the installation is done, you can open your project folder:

```sh
cd my-new-app
```

Inside the newly created project you can run your new application:

```sh
npm run local
```

You have a basic test setup with [Mocha][3]:

```sh
npm test
```

## What’s Included?

Your new project will have everything you need to start creating a modern application. :sunglasses:

The main features are:

- Typescript configuration with reasonable defaults;
- Auxiliary npm scripts to build, test and run your application locally;
- [VsCode][4] integration that allows you to debug your code and tests with breakpoints;
- Testing configuration via [Sinon][7], [Mocha][3] and [Chai][6];
- Lint configuration via [eslint][5] and typescript plugins.

## Issues

If something doesn’t work, please [file an issue][9].<br>

## License

Create Typescript Application is open source software [licensed as MIT][10].

[1]: https://www.typescriptlang.org/
[2]: https://nodejs.org/en/
[3]: https://mochajs.org/
[4]: https://code.visualstudio.com/
[5]: https://eslint.org/
[6]: https://www.chaijs.com/
[7]: https://sinonjs.org/
[8]: https://www.npmjs.com/package/npx
[9]: https://github.com/allisonmachado/create-typescript-application/issues/new
[10]: https://github.com/allisonmachado/create-typescript-application/blob/main/LICENSE