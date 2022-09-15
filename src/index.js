#! /usr/bin/env node
import fs from 'fs';
import prompt from 'prompt';
import shell from 'shelljs';
import winston from 'winston';

const templateDownloadUrl = 'https://github.com/allisonmachado/typescript-nodejs-template/archive/refs/heads/master.tar.gz';

const properties = [
  {
    name: 'name',
    message: 'app name',
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

const { name } = await prompt.get(properties);

logger.info(`chosen app name: ${name}`);

if (hasWgetInstalled()) {
  const command = `wget -qO- ${templateDownloadUrl} > ${name}.tar.gz`;
  logger.debug(`downloading template: ${command}`);

  shell.exec(command);
} else if (hasCurlInstalled()) {
  const command = `curl -s -L ${templateDownloadUrl} > ${name}.tar.gz`;
  logger.debug(`downloading template: ${command}`);

  shell.exec(command);
} else {
  logger.error('Sorry, this script requires that either curl or wget is installed in the system');
  process.exit(1);
}

shell.exec(`tar -xzf ${name}.tar.gz`);
shell.mv('typescript-nodejs-template-master', `${name}`);
shell.rm(`${name}.tar.gz`);

shell.rm(`./${name}/CHANGELOG.md`);
shell.rm('-rf', `./${name}/.github`);

shell.ShellString(`# ${name}`).to(`./${name}/README.md`);

const createdPackage = JSON.parse(fs.readFileSync(`./${name}/package.json`, 'utf8'));

createdPackage.name = name;
createdPackage.description = '';
createdPackage.version = '0.0.1';

fs.writeFileSync(`./${name}/package.json`, JSON.stringify(createdPackage, null, 2));

logger.info(`app ${name} initialized successfully!`);
