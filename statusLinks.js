const { error } = require('console');
const fetch = require('node-fetch');
const statusLinks = (links) => {
  return Promise.all(links.map(text => {
    let arrayText = text.split('(')
    let onlyText = arrayText[0].replace('[', '').replace(']', '');
    let onlyLink = arrayText.pop().replace(')', '');
    return fetch(onlyLink)
      .then(response => {
        // falta return
        if (response.status == 200) {
          return {
            url: onlyLink,
            text: onlyText,
            status: response.status,
            ok: '✓'
          } 
        } else {
          return {
            href: onlyLink,
            text: onlyText,
            status: response.status,
            ok: 'X'
          } 
        }
      })
      .catch(response =>{
        if(response.status > 200){
          return {
            href: onlyLink,
            text: onlyText,
            statuss: response.statu,
            ok: 'X'
          }
        }
      })
  }));
}
module.exports = {
  statusLinks
}