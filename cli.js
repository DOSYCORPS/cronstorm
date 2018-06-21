#!/usr/bin/env node

"use strict";

{
  const CF = require('configstore');
  const pkg = require('./package.json');
  const cf = new CF(pkg, {'apiKey': 'chronos'});
  const kairoi = require('./kairoi.js');

  const argv = require('yargs')
    .command(['auth', '$0'], 'the auth command', () => {}, argv => {
      console.log(
        'To get an API key, visit this link in your browser: https://api.pocketwatch.xyz');
    })
    .command('* <method> <url>', 'request specifier', () => {}, argv => {
      console.log( 'request', argv.method, argv.url );
    });
    .command({
      command: 'every <i> <t>',
      handler: argv => {
        argv.interval_unit_count = argv.i;
        argv.interval_unit_type = argv.t;
      }
    })
    .command({
      command: 'for <i> <t>',
      handler: argv => {
        argv.duration_unit_count = argv.i;
        argv.duration_unit_type = argv.t;
      }
    })
    .option('body', {
      describe: 'specify an entity request body'
    })
    .optiona('contentType', {
      describe: 'specify the MIME string to be sent as Content-Type header'
    })
    

  console.log(argv);
}
