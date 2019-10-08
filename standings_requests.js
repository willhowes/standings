const axios = require('axios')

async function main() {
  try {
    const response1 = await axios.get('https://makers.sd.dazn-dev.com/api/competitions');
    const id = response1.data.competition[0].id
    const response2 = await axios.get(`https://makers.sd.dazn-dev.com/api/competitions/${id}`);
    console.log(response1.data.competition[0].name);
    console.log(response2.data.competitionId)
  } catch(error) {
    console.log(error);
  }
}

main();