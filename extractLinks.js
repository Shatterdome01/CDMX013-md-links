const fs = require('fs');
const path = require('path');
//const {validatePath} = require('./validateP');

const extractLinks = (existingPath) => {
    //let existing = validatePath(existingPath);
    let link = [];
    let extension = existingPath.split('.').pop();
    if (extension == 'md') {
      let data =  fs.readFileSync(existingPath, 'utf-8')
        link = Array.from(data.match(/\[(.+)\]\((https?:.+)\)/ig));
        // console.log(link);
    }
    return link;
}

module.exports = {
    extractLinks
}

