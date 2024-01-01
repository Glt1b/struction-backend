process.env.CYCLIC_DB = 'https://struction-backend.cyclic.app'
const CyclicDB = require('@cyclic.sh/dynamodb')
const db = CyclicDB('tan-outrageous-ostrichCyclicDB')


const run = async function (){
  let x = db.collection('Mossbrook Court')
  let markers = await x.index('type').find('seal')

  console.log('markers: ', markers)
  console.log(markers.results.length)

  const arr = [];

  for ( let m of markers.results ){
    arr.push(m.props)
  }

  console.log(arr)
}

//run()