const axios = require('axios')

axios.all([
  axios.get('https://makers.sd.dazn-dev.com/api/competitions')
]).then(axios.spread((response1) => {

  console.log(response1)
})).catch(error => {
  console.log(error);
});
