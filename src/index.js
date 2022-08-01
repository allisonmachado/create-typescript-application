#! /usr/bin/env node
const prompt = require('prompt');
const shell = require('shelljs');

const templateDownloadUrl = 'https://github.com/allisonmachado/typescript-nodejs-template/archive/refs/heads/master.tar.gz';

const properties = [
  {
    name: 'app-name',
    validator: /^[a-z-]+$/,
    warning: 'App name must be only lower case letters or dashes',
  },
];

const isUnixSystem = () => false;

prompt.start();

prompt.get(properties, (_error, result) => {
  const chosenAppName = result['app-name'];

  if (isUnixSystem()) {
    shell.exec(`wget -qO- ${templateDownloadUrl} > ${chosenAppName}.tar.gz`);
  } else {
    shell.exec(`curl -L ${templateDownloadUrl} > ${chosenAppName}.tar.gz`);
  }
  shell.exec(`tar -xzf ${chosenAppName}.tar.gz`);
  shell.mv('typescript-nodejs-template-master', `${chosenAppName}`);
  shell.rm(`${chosenAppName}.tar.gz`);

  return undefined;
});
