const fs = require('fs');
const path = require('path');
//const {validatePath} = require('./validateP');

const extractLinks = (existingPath) => {
   //let existing = validatePath(existingPath);
   let link=[];
    let extension = existingPath.split('.').pop();
    if (extension == 'md') {
        fs.readFile(existingPath, 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                 link = Array.from(data.match(/\[(.+)\]\((https?:.+)\)/ig));
                console.log(link);
            }
        })
    }
    return link;
}

module.exports = {
    extractLinks
}

