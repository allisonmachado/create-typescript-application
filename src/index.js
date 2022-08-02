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
    const command = `wget -qO- ${templateDownloadUrl} > ${chosenAppName}.tar.gz`;
    logger.debug(`downloading template: ${command}`);

    shell.exec(command);
  } else if (hasCurlInstalled()) {
    const command = `curl -s -L ${templateDownloadUrl} > ${chosenAppName}.tar.gz`;
    logger.debug(`downloading template: ${command}`);

    shell.exec(command);
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
