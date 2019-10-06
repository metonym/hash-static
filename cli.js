#!/usr/bin/env node

(() => {
  try {
    require('./lib').hashStaticCli(process);
  } catch (error) {
    process.stderr.write(`${error}\n`);
  }
})();
