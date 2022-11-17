const fs = require('fs');

const extractLinks = (existingPath) => {
    let link = [];
    let extension = existingPath.split('.').pop();
    if (extension == 'md') {
        let data = fs.readFileSync(existingPath, 'utf-8')
        link = Array.from(data.match(/\[(.+)\]\((https?:.+)\)/ig));
    }
    return link;
}

module.exports = {
    extractLinks
}

