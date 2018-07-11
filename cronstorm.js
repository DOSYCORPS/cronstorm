"use strict";
{
  const pw = require('cronstorm-client');
  const releaseVersion = require('./package.json').version;

  let apiKey;

  const cronstorm = {
    start, end,
    set key(key) {
      apiKey = key;
      pw.authorize(key);
    },
    test
  };

  module.exports = cronstorm;

  async function start({
      interval,
      intervalCount,
      duration,
      durationCount,
      method, url, body: body = '', contentType,
      name: name = ''
    }={}) {
      name = name + `via cronstorm ${releaseVersion}`; 
      const data = {
        apiKey,
        interval,
        intervalCount,
        duration,
        durationCount,
        method, url, body, contentType,
        name
      };
      const result = await pw.job.create(data);
      let status = parsePWResult(result);
      if ( status == "OK" ) {
        status += ` ${result.job.keyName}`;
      }
      return status;
  }

  async function end({id}={}) {
    const result = await pw.job.delete(id); 
    return parsePWResult(result);
  }

  function parsePWResult(result) {
    if ( result.status == "success" ) {
      return "OK";
    } else {
      return result.error.message;
    }
  }

  async function test() {
    cronstorm.key = 'abc';
    console.log('start',await start());
    console.log('end', await end());
  }
}
