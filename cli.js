#!/usr/bin/env node

"use strict";

{
  const CF = require('configstore');
  const pkg = require('./package.json');
  const cf = new CF(pkg, {'apiKey': 'chronos'});
  const kairoi = require('./kairoi.js');
  const TIME_UNITS = ['second', 'minute', 'hour', 'week', 'month'];
  const singularize = v => v.endsWith('s') ? v.slice(0,-1) : v;

  const argv = require('yargs')
    .command(['auth', '$0'], 'auth in with your API key', () => {}, argv => {
      console.log(
        'To get an API key, visit this link in your browser: https://api.pocketwatch.xyz');
    })
    .command({
      command: 'every <i> <t> for <I> <T> <method> <url>',
      handler: argv => {
        argv.interval_unit_count = argv.i;
        argv.interval_unit_type = argv.t;
        argv.duration_unit_count = argv.I;
        argv.duration_unit_type = argv.T;
      }
    })
    .coerce('interval_unit_type', v => {
      v = v + '';
      v = v.toLowerCase();
      v = singularize(v);
      return v;
    })
    .choices('interval_unit_type', TIME_UNITS);
    .coerce('duration_unit_type', v => {
      v = v + '';
      v = v.toLowerCase();
      v = singularize(v);
      return v;
    })
    .choices('duration_unit_type', TIME_UNITS);
    .option('body', {
      describe: 'specify an entity request body'
    })
    .option('contentType', {
      describe: 'specify the MIME string to be sent as Content-Type header'
    })
    .option('apiKey', {
      describe: 'override the saved apiKey'
    })
    .help()
    .argv

  console.log(argv);
}
