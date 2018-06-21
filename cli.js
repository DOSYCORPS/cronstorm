#!/usr/bin/env node

"use strict";

{
  const CF = require('configstore');
  const pkg = require('./package.json');
  const cf = new CF(pkg, {'apiKey': 'chronos'});
  const {URL} = require('url');

  const kairoi = require('./kairoi.js');
  const TIME_UNITS = ['second', 'minute', 'hour', 'week', 'month'];
  const METHOD = ["GET","POST","PUT","DELETE","PATCH","HEAD"];
  const singularize = v => v.endsWith('s') ? v.slice(0,-1) : v;

  const argv = require('yargs')
    .command(['$0', 'auth'], 'auth in with your API key', () => {}, argv => {
      console.log(
        'To get an API key, visit this link in your browser: https://api.pocketwatch.xyz');
    })
    .command({
      command: 'begin <method> <url> every <interval> <time> for <total> <Time>',
      describe: `Example:
        
        kairoi begin post http://a.b every 1 seconds for 9 months`,
      handler: argv => {
        argv.interval_unit_count = argv.interval;
        argv.interval_unit_type = argv.time;
        argv.duration_unit_count = argv.total;
        argv.duration_unit_type = argv.Time;
      }
    })
    .command({
      command: 'every <interval> <time> for <total> <Time> <method> <url>',
      alias: '$0 <method> <url> every <interval> <time> for <total> <Time>',
      describe: 'begin making requests',
      handler: argv => {
        argv.interval_unit_count = argv.interval;
        argv.interval_unit_type = argv.time;
        argv.duration_unit_count = argv.total;
        argv.duration_unit_type = argv.Time;
      }
    })
    .coerce('interval', v => {
      v = parseInt(v);
      if ( ! Number.isInteger(v) ) {
        throw new Error("Integer required for interval");
      }
      return v;
    })
    .coerce('total', v => {
      v = parseInt(v);
      if ( ! Number.isInteger(v) ) {
        throw new Error("Integer required for total");
      }
      return v;
    })
    .coerce('time', v => {
      v = v + '';
      v = v.toLowerCase();
      v = singularize(v);
      return v;
    })
    .choices('time', TIME_UNITS)
    .coerce('Time', v => {
      v = v + '';
      v = v.toLowerCase();
      v = singularize(v);
      return v;
    })
    .choices('Time', TIME_UNITS)
    .coerce('url', v => {
      new URL(v);
      return v;
    })
    .coerce('method', v => (v+'').toUpperCase())
    .choices('method', METHOD)
    .example('every 1 seconds for 10 weeks post https://localhost')
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
