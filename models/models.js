process.env.CYCLIC_DB = 'https://struction-backend.cyclic.app'
const CyclicDB = require('@cyclic.sh/dynamodb')
const db = CyclicDB('tan-outrageous-ostrichCyclicDB')

exports.getUserDynamo = async (username) => {
    let users = db.collection('users');
    let user = await users.get(username);
    return user
};

exports.getProjectDynamo = async (project_name) => {
    let project = db.collection(project_name);
    let details = await project.get('details');
    let markers = await project.get('markers');
    const obj = {project: [details, markers]};
    return obj
}

exports.postMarkerDynamo = async (project_name, marker) => {
    let project = db.collection(project_name);
    let markers = await project.get('markers');

    let newMarkers = markers.props.markers;
    newMarkers.push(marker)

    let set = await project.set('markers', {
        'markers': newMarkers
    })

    let res = await project.get('markers');
    
    return res

}