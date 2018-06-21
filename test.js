"use strict";
{
  const kairoi = require('./kairoi.js');

  const test = {
    run
  };

  module.exports = test;
  
  if ( require.main === module ) {
    run();
  }

  function run() {
    kairoi.test();
  }
}
