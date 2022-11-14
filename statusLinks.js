const fs = require('fs')
const fetch = require('node-fetch');


const statusLinks = (links)=>{
  const onlyLink = '';
  links.forEach(text => {
     onlyLink = text.split('(').pop().replace(')', '');
    fetch(onlyLink)
    .then(response => {
      response.status = '200' ? (console.log(response.status, onlyText ,'✓', onlyLink)) : (console.log(response.status, '400', onlyLink))
    }) 
    .catch(err => {
      console.log(err, '400', onlyLink);
    })   
  });
  return onlyLink;

}

module.exports={
  statusLinks
}