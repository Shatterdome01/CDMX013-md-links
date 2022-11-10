const fs = require('fs')
const process = require('node:process');
const fetch = require('node-fetch');

const validatePath = (path) => {
  let result = 'no exist';
  try {
    if (fs.existsSync(path)) {
      result = 'exist';
      console.log(path);
      let ext = path.split('.').pop();
      if (ext == 'md') {
        fs.readFile(path, 'utf-8', (err, data) => {
          if (err) {
            console.log(err);
          } else {
            let link = Array.from(data.match(/\[(.+)\]\((https?:.+)\)/ig));
            link.forEach(text => {
              const onlyLink = text.split('(').pop().replace(')', '');
              // console.log(onlyLinks);
              fetch(onlyLink)
                .then(response => {
                  response.status = '200' ? (console.log(response.status,'✓', onlyLink)) : (console.log(response.status, '❌', onlyLink))
                })
                .catch(err => {
                  console.log(err, '❌', onlyLink);
                })   
            })
          }
        })
       // console.log('Welcome to the party');
      } else {
        console.log('Sorry, the path you entered isn´t .md, try again...');
      }
    }
  } catch (err) {
    result = err;
  }
   return result;
}
console.log(validatePath(process.argv[2]));