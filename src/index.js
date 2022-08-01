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

const hasCurlInstalled = () => !!shell.which('curl');
const hasWgetInstalled = () => !!shell.which('wget');

prompt.start();

prompt.get(properties, (_error, result) => {
  const chosenAppName = result['app-name'];

  if (hasWgetInstalled()) {
    shell.exec(`wget -qO- ${templateDownloadUrl} > ${chosenAppName}.tar.gz`);
  } else if (hasCurlInstalled()) {
    shell.exec(`curl -L ${templateDownloadUrl} > ${chosenAppName}.tar.gz`);
  } else {
    throw new Error('Sorry, this script requires that either curl or wget is installed in the system');
  }
  shell.exec(`tar -xzf ${chosenAppName}.tar.gz`);
  shell.mv('typescript-nodejs-template-master', `${chosenAppName}`);
  shell.rm(`${chosenAppName}.tar.gz`);

  return undefined;
});
