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
    }
  };

  module.exports = kairoi;

  async function start({
    interval_unit_type,
    interval_unit_count,
    duration_unit_type,
    duration_unit_count,
    method, url, body: body = '', contentType,
    name: name = ''
  }={}) {
    name = name + `via kairoi ${releaseVersion}`; 
    const result = await pw.timer.create({
      apiKey,
      interval_unit_type,
      interval_unit_count,
      duration_unit_type,
      duration_unit_count,
      method, url, body, contentType,
      name
    });
    return parsePWResult(result);
  }

  async function end({id}={}) {
    const result = await pw.timer.end(id); 
    return parsePWResult(result);
  }

  function parsePWResult(result) {
    if ( result.status == "success" ) {
      return "OK";
    } else {
      return result.error.message;
    }
  }
}
