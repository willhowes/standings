const axios = require('axios')

async function main() {
  try {
    const response1 = await axios.get('https://makers.sd.dazn-dev.com/api/competitions');
    console.log(response1.data.competition[0].name);
  } catch(error) {
    console.log(error);
  }
}

main();