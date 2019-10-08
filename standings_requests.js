const axios = require('axios')
const Koa = require('koa');
const app = new Koa();

async function main() {
  try {
    const response1 = await axios.get('https://makers.sd.dazn-dev.com/api/competitions');
    const id = response1.data.competition[0].id
    const response2 = await axios.get(`https://makers.sd.dazn-dev.com/api/competitions/${id}`);
    return [{"name": response1.data.competition[0].name, "standings": response2.data}]
    
  } catch(error) {
    console.log(error);
  }
  
}

main();

app.use(async ctx => {
  ctx.body = await main();
});

app.listen(3000);

