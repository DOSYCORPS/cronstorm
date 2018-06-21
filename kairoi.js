"use strict";
{
  const pw = require('@dosy/pocketwatch');
  const releaseVersion = require('./package.json').version;

  let apiKey;

  const kairoi = {
    start, end,
    set key(key) {
      apiKey = key;
      pw.authorize(key);
    },
    test
  };

  module.exports = kairoi;

  async function start({
    interval,
    intervalCount,
    duration,
    durationCount,
    method, url, body: body = '', contentType,
    name: name = ''
  }={}) {
    name = name + `via kairoi ${releaseVersion}`; 
    const data = {
      apiKey,
      interval,
      intervalCount,
      duration,
      durationCount,
      method, url, body, contentType,
      name
    };
    const result = await pw.timer.create(data);
    let status = parsePWResult(result);
    if ( status == "OK" ) {
      status += ` ${result.timer.keyName}`;
    }
    return status;
  }

  async function end({id}={}) {
    const result = await pw.timer.delete(id); 
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
    kairoi.key = 'abc';
    console.log('start',await start());
    console.log('end', await end());
  }
}
