const {statusLinks} =  require('./statusLinks.js');
const {extractLinks} = require('./extractLinks.js');
const fs = require('fs')
const process = require('node:process');

const mdLinks = (path) => {
  let result = 'no exist';
  try {
      if (fs.existsSync(path)) {
          result = statusLinks(extractLinks(path));
      }
  } catch (err) {
      result = err;
  }
  return result;
}

mdLinks(process.argv[2]).then(console.log);