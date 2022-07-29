#! /usr/bin/env node
const prompt = require('prompt');
const shell = require('shelljs');

const properties = [
  {
    name: 'app-name',
    validator: /^[a-z-]+$/,
    warning: 'App name must be only lower case letters or dashes',
  },
];

prompt.start();

prompt.get(properties, (err, result) => {
  if (err) {
    console.log(err);
    return 1;
  }

  shell.exec(`curl -L https://github.com/allisonmachado/typescript-nodejs-template/archive/refs/heads/master.tar.gz > ${result['app-name']}.tar.gz`);
  shell.exec(`tar -xzf ${result['app-name']}.tar.gz`);
  shell.exec(`mv typescript-nodejs-template-master ${result['app-name']}`);
  shell.exec(`rm ${result['app-name']}.tar.gz`);

  return undefined;
});
