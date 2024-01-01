


process.env.CYCLIC_DB = 'https://struction-backend.cyclic.app'
const CyclicDB = require('@cyclic.sh/dynamodb')
const db = CyclicDB('tan-outrageous-ostrichCyclicDB')
const AWS = require("aws-sdk");
const s3 = new AWS.S3()
const bucket = 'cyclic-tan-outrageous-ostrich-eu-central-1'


// setup project


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
    let markers = await project.index('type').find('seal')
  
    const arr = [];
  
    for ( let m of markers.results ){
      arr.push(m.props)
    }

    const obj = {project: [details, arr]};
    return obj
}

exports.postProjectDynamo = async (project_name, body) => {
    let project = db.collection(project_name);
    let post = await project.set('details', body)
}

exports.postMarkerDynamo = async (project_name, marker) => {
    let project = db.collection(project_name);
    //save marker
    let create = await project.set(marker.id, marker, {
        $index: ['type']
    })
    // get all markers
    let markers = await project.index('type').find('seal')

    const arr = [];
  
    for ( let m of markers.results ){
      arr.push(m.props)
    }

    return arr;
}

exports.delMarkerDynamo = async (project_name, marker_id) => {
    let project = db.collection(project_name);
    await project_name.delete(marker_id)
    return
}

exports.patchMarkerDynamo = async (project_name, marker_id, obj) => {
    let project = db.collection(project_name);
    //save marker
    let create = await project.set(marker_id, obj, {
        $index: ['type']
    })
    // get all markers
    let markers = await project.index('type').find('seal')

    const arr = [];
  
    for ( let m of markers.results ){
      arr.push(m.props)
    }

    return arr;
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