const { error } = require('console');
const fs = require('fs')
const fetch = require('node-fetch');


const statusLinks = (links) => {
  // console.log(links)
  return Promise.all(links.map(text => {
    let onlyLink = text.split('(').pop().replace(')', '');
    return fetch(onlyLink)
      .then(response => {
        // falta return
        if(response.status >= '200'){
          return { url: onlyLink,
            status: response.status,
            ok: '✓'
        } 
      }else{
        return {url: onlyLink,
          status: '500',
          ok: 'x'
      } 
      }
        //response.status = '200' ? (console.log(response.status, onlyText, '✓', onlyLink)) : (console.log(response.status, '400', onlyLink))
      })
      .catch(console.error)
  }));


}

module.exports = {
  statusLinks
}