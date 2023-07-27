


process.env.CYCLIC_DB = 'https://struction-backend.cyclic.app'
const CyclicDB = require('@cyclic.sh/dynamodb')
const db = CyclicDB('tan-outrageous-ostrichCyclicDB')
const AWS = require("aws-sdk");
const s3 = new AWS.S3()
const bucket = 'cyclic-tan-outrageous-ostrich-eu-central-1'


// setup project

exports.setupMarkersDynamo = async (project_name) => {
    let project = db.collection(project_name);
    let setup = await project.set('markers', {
        'markers': []
    })
    let get = await project.get('markers');
    console.log(get)
}

exports.getProjectsListDynamo = async () => {
    let projects = db.collection('projects');
    let getProjects = await projects.get('list');
    return getProjects
}

exports.postProjectsListDynamo = async (newList) => {
    let projects = db.collection('projects');
    let postProjects = await projects.set('list', {
        'list': newList})
}

// users

exports.getUserDynamo = async (username) => {
    let users = db.collection('users');
    let user = await users.get(username);
    return user

};

exports.postUserDynamo = async (username, body) => {
    console.log(username)
    console.log(body)
    let users = db.collection('users');
    let user = await users.set(username, body)
    return 'done'

};

exports.deleteUserDynamo = async (username) => {
    let users = db.collection('users');
    let user = await users.delete(username);
}

exports.getUsersListDynamo = async () => {
    let users= db.collection('users');
    let list = await users.get('users');
    return list;
}

exports.postUsersListDynamo = async (obj) => {
    let users = db.collection('users');
    console.log(obj)
    let list = await users.set('users', obj);
    return obj;
}

// project details

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
            materialsUsed: marker[key].materialsUsed,
            measurements: marker[key].measurements,
            service: marker[key].service,
            completedBy: marker[key].completedBy,
            comment: marker[key].comment,
            status: marker[key].status,
            photos: marker[key].photos,
            fR: marker[key].fR,
            doorConfiguration: marker[key].doorConfiguration,
            doorFinish: marker[key].doorFinish,
            doorGapHinge: marker[key].doorGapHinge,
            doorGapLockSide: marker[key].doorGapLockSide,
            doorGapHead: marker[key].doorGapHead,
            doorGapBottom: marker[key].doorGapBottom,
            openingHeight: marker[key].openingHeight,
            visionPanel: marker[key].visionPanel,
            frameCondition: marker[key].frameCondition,
            frameConditionComment: marker[key].frameConditionComment,
            hingeAdjustment: marker[key].hingeAdjustment,
            ironmongery: marker[key].ironmongery,
            type: marker[key].type,
            handle: marker[key].handle,
            lock: marker[key].lock,
            doorCondition: marker[key].doorCondition
        }

        markersToSend.push(mrk)
    }

    const obj = {project: [details, markersToSend]};
    return obj
}

exports.postProjectDynamo = async (project_name, body) => {
    let project = db.collection(project_name);
    let post = await project.set('details', body)
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
            materialsUsed: marker[key].materialsUsed,
            measurements: marker[key].measurements,
            service: marker[key].service,
            completedBy: marker[key].completedBy,
            comment: marker[key].comment,
            status: marker[key].status,
            photos: marker[key].photos,
            fR: marker[key].fR,
            doorConfiguration: marker[key].doorConfiguration,
            doorFinish: marker[key].doorFinish,
            doorGapHinge: marker[key].doorGapHinge,
            doorGapLockSide: marker[key].doorGapLockSide,
            doorGapHead: marker[key].doorGapHead,
            doorGapBottom: marker[key].doorGapBottom,
            openingHeight: marker[key].openingHeight,
            visionPanel: marker[key].visionPanel,
            frameCondition: marker[key].frameCondition,
            frameConditionComment: marker[key].frameConditionComment,
            hingeAdjustment: marker[key].hingeAdjustment,
            ironmongery: marker[key].ironmongery,
            type: marker[key].type,
            handle: marker[key].handle,
            lock: marker[key].lock,
            doorCondition: marker[key].doorCondition
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
            materialsUsed: marker[key].materialsUsed,
            measurements: marker[key].measurements,
            service: marker[key].service,
            completedBy: marker[key].completedBy,
            comment: marker[key].comment,
            status: marker[key].status,
            photos: marker[key].photos,
            fR: marker[key].fR,
            doorConfiguration: marker[key].doorConfiguration,
            doorFinish: marker[key].doorFinish,
            doorGapHinge: marker[key].doorGapHinge,
            doorGapLockSide: marker[key].doorGapLockSide,
            doorGapHead: marker[key].doorGapHead,
            doorGapBottom: marker[key].doorGapBottom,
            openingHeight: marker[key].openingHeight,
            visionPanel: marker[key].visionPanel,
            frameCondition: marker[key].frameCondition,
            frameConditionComment: marker[key].frameConditionComment,
            hingeAdjustment: marker[key].hingeAdjustment,
            ironmongery: marker[key].ironmongery,
            type: marker[key].type,
            handle: marker[key].handle,
            lock: marker[key].lock,
            doorCondition: marker[key].doorCondition
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
            materialsUsed: marker[key].materialsUsed,
            measurements: marker[key].measurements,
            service: marker[key].service,
            completedBy: marker[key].completedBy,
            comment: marker[key].comment,
            status: marker[key].status,
            photos: marker[key].photos,
            fR: marker[key].fR,
            doorConfiguration: marker[key].doorConfiguration,
            doorFinish: marker[key].doorFinish,
            doorGapHinge: marker[key].doorGapHinge,
            doorGapLockSide: marker[key].doorGapLockSide,
            doorGapHead: marker[key].doorGapHead,
            doorGapBottom: marker[key].doorGapBottom,
            openingHeight: marker[key].openingHeight,
            visionPanel: marker[key].visionPanel,
            frameCondition: marker[key].frameCondition,
            frameConditionComment: marker[key].frameConditionComment,
            hingeAdjustment: marker[key].hingeAdjustment,
            ironmongery: marker[key].ironmongery,
            type: marker[key].type,
            handle: marker[key].handle,
            lock: marker[key].lock,
            doorCondition: marker[key].doorCondition
        }

        markersToSend.push(mrk)
    }
    return markersToSend
}

exports.patchMultimarkersDynamo = async () => {

}

// images


exports.getImageS3 = async (image_id) => {

    let my_file = await s3.getObject({
        Bucket: bucket,
        Key: image_id
    }).promise()

    return my_file.Body
}

exports.postImageS3 = async (image_id, image) => {

    console.log(image)

    const uploadedImage = await s3.upload({
        Bucket: bucket,
        Key: image_id,
        Body: image,
      }).promise()

    if (uploadedImage && uploadedImage.Location) {
        return true;
    } else {
        return false;
        // Handle the failure case if needed
    }
}


exports.delImageS3 = async (image_id) => {
    const image = await s3.deleteObject({
        Bucket: bucket,
        Key: image_id
    }).promise()

    return 'deleted'
}