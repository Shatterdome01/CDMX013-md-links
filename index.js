// const {validateP} = require('./validateP.js');
const {statusLinks} =  require('./statusLinks.js');
const {extractLinks} = require('./extractLinks.js');
const fs = require('fs')
const process = require('node:process');

const mdLinks = (path) => {
  let result = 'no exist';
  try {
      if (fs.existsSync(path)) {
          result = 'exist';
          //console.log(path);
           statusLinks(extractLinks(path));
         // console.log(statusLinks(aux));
      }
  } catch (err) {
      result = err;
  }
  return result;
}

console.log(mdLinks(process.argv[2]));