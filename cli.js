#!/usr/bin/env node

"use strict";

{
  const CF = require('configstore');
  const pkg = require('./package.json');
  const cf = new CF(pkg, {'apiKey': 'chronos'});
  const kairoi = require('./kairoi.js');

  const argv = require('yargs').argv;

  console.log(argv);
}
