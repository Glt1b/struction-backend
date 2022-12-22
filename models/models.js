process.env.CYCLIC_DB = 'https://struction-backend.cyclic.app'
const CyclicDB = require('@cyclic.sh/dynamodb')
const db = CyclicDB('tan-outrageous-ostrichCyclicDB')
const AWS = require("aws-sdk");
const s3 = new AWS.S3()
const bucket = 'cyclic-tan-outrageous-ostrich-eu-central-1'

exports.getUserDynamo = async (username) => {
    let users = db.collection('users');
    let user = await users.get(username);
    return user
};

exports.getProjectDynamo = async (project_name) => {
    let project = db.collection(project_name);
    let details = await project.get('details');
    let markers = await project.get('markers');

   
    const markersToSend = [];

    for ( let marker of markers.props.markers ){
        const key = Object.keys(marker)[0];

        mrk = {
            id: marker[key].id,
            number: marker[key].number,
            location: marker[key].location,
            locationOnDrawing: marker[key].locationOnDrawing,
            materialUsed: marker[key].materialUsed,
            measurements: marker[key].measurements,
            service: marker[key].service,
            completedBy: marker[key].completedBy,
            photos: marker[key].photos,
            photos_after: marker[key].photos_after
        }

        markersToSend.push(mrk)
    }

    const obj = {project: [details, markersToSend]};
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
      
    const markersToSend = [];

    for ( let marker of res.props.markers ){
        const key = Object.keys(marker)[0];

        mrk = {
            id: marker[key].id,
            number: marker[key].number,
            location: marker[key].location,
            locationOnDrawing: marker[key].locationOnDrawing,
            materialUsed: marker[key].materialUsed,
            measurements: marker[key].measurements,
            service: marker[key].service,
            completedBy: marker[key].completedBy,
            photos: marker[key].photos,
            photos_after: marker[key].photos_after
        }

        markersToSend.push(mrk)
    }

    
    return markersToSend

}

exports.delMarkerDynamo = async (project_name, marker_id) => {
    let project = db.collection(project_name);
    let markers = await project.get('markers');

    const newMarkers = markers.props.markers
    
    const markersUpdated = [];

    for ( let marker of newMarkers){
        if ( !marker[marker_id] ) {
            markersUpdated.push(marker)
        }
    }

    let set = await project.set('markers', {
        'markers': markersUpdated
    })

    let res = await project.get('markers');
    
    const markersToSend = [];

    for ( let marker of res.props.markers ){
        const key = Object.keys(marker)[0];

        mrk = {
            id: marker[key].id,
            number: marker[key].number,
            location: marker[key].location,
            locationOnDrawing: marker[key].locationOnDrawing,
            materialUsed: marker[key].materialUsed,
            measurements: marker[key].measurements,
            service: marker[key].service,
            completedBy: marker[key].completedBy,
            photos: marker[key].photos,
            photos_after: marker[key].photos_after
        }

        markersToSend.push(mrk)
    }
    return markersToSend
}

exports.patchMarkerDynamo = async (project_name, marker_id, obj) => {
    let project = db.collection(project_name);
    let markers = await project.get('markers');

    const newMarkers = markers.props.markers
    
    const markersUpdated = [];

    for ( let marker of newMarkers){
        if ( !marker[marker_id] ) {
            markersUpdated.push(marker)
        }
    }

    markersUpdated.push(obj);

    let set = await project.set('markers', {
        'markers': markersUpdated
    })

    let res = await project.get('markers');
    
    const markersToSend = [];

    for ( let marker of res.props.markers ){
        const key = Object.keys(marker)[0];

        mrk = {
            id: marker[key].id,
            number: marker[key].number,
            location: marker[key].location,
            locationOnDrawing: marker[key].locationOnDrawing,
            materialUsed: marker[key].materialUsed,
            measurements: marker[key].measurements,
            service: marker[key].service,
            completedBy: marker[key].completedBy,
            photos: marker[key].photos,
            photos_after: marker[key].photos_after
        }

        markersToSend.push(mrk)
    }
    return markersToSend
}

exports.getDrawingDynamo = async (image_id) => {

    let my_file = await s3.getObject({
        Bucket: bucket,
        Key: image_id
    }).promise()

    return my_file.Body
}