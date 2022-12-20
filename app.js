process.env.CYCLIC_DB = 'https://struction-backend.cyclic.app'
const CyclicDB = require('@cyclic.sh/dynamodb')
const db = CyclicDB('tan-outrageous-ostrichCyclicDB')

const run = async function(){
    let animals = db.collection('animals')

    //create an item in collection with key "leo"
    let leo = await animals.set('marcin', {
        type:'human',
        color:'white'
    })

    // get an item at key "leo" from collection animals
    let item = await animals.get('marcin')
    console.log(item)
}
run()