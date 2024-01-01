process.env.CYCLIC_DB = 'https://struction-backend.cyclic.app'
const CyclicDB = require('@cyclic.sh/dynamodb')
const db = CyclicDB('tan-outrageous-ostrichCyclicDB')

const run = async function(){

    // get list of project

    let projects = db.collection('projects')
    let list = await projects.get('list');

    //console.log(list.props.list)

    // iterate through list 

    for (let project of list.props.list){
        let data = db.collection(project);
        let markers = await data.get('markers')


        for (let m of markers.props.markers){
        //extract marker name and data

        let key = Object.keys(m)[0]
        console.log(key)
        console.log(m[key])

        let create = await data.set(key, m[key], {
            $index: ['type']
        })
        }
    }

}

//run()