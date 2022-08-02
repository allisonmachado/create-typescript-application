#! /usr/bin/env node
const prompt = require('prompt');
const shell = require('shelljs');
const winston = require('winston');

const templateDownloadUrl = 'https://github.com/allisonmachado/typescript-nodejs-template/archive/refs/heads/master.tar.gz';

const properties = [
  {
    name: 'app-name',
    validator: /^[a-z-]+$/,
    warning: 'App name must only contain lower case letters and dashes, e.g: "my-app"',
  },
];

const logger = winston.createLogger({
  level: 'silly',
  format: winston.format.cli(),
  transports: [new winston.transports.Console()],
});

const hasCurlInstalled = () => !!shell.which('curl');
const hasWgetInstalled = () => !!shell.which('wget');

prompt.start();

prompt.get(properties, (_error, result) => {
  const chosenAppName = result['app-name'];

  logger.info(`chosen app name: ${chosenAppName}`);

  if (hasWgetInstalled()) {
    logger.debug('downloading via wget');
    shell.exec(`wget -qO- ${templateDownloadUrl} > ${chosenAppName}.tar.gz`);
  } else if (hasCurlInstalled()) {
    logger.debug('downloading via curl');
    shell.exec(`curl -L ${templateDownloadUrl} > ${chosenAppName}.tar.gz`);
  } else {
    logger.error('Sorry, this script requires that either curl or wget is installed in the system');
    process.exit(1);
  }

  shell.exec(`tar -xzf ${chosenAppName}.tar.gz`);
  shell.mv('typescript-nodejs-template-master', `${chosenAppName}`);
  shell.rm(`${chosenAppName}.tar.gz`);

  logger.info(`app ${chosenAppName} initialized successfully!`);

  return undefined;
});
