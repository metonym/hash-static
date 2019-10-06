#!/usr/bin/env node

(() => {
  try {
    require('./lib').hashStaticCli(process);
  } catch (error) {
    process.stdout.write(`${error}\n`);
  }
})();
