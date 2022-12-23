
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
////////////////////////////////////////////////////////////////
exports.seedDynamo = async () => {
    let users = db.collection('users')

    let test_user = await users.set('test_user', {
        "mail": "mail@gmail.com",
        "role": "worker",
        "password": "worker123",
        "projects": ["project1", "project2"]
    })

    // project1

    let project1 = db.collection('project1')

    let details1 = await project1.set('details', {
        
            "address": "some_address",
            "users": ["Marcin", "Carl"],
            "materials": ["firebatt", "mastic", "collar", "wrap", "putty pad"],
            "services": ["steel beam", "pipe", "duct", "cable tray", "cable"],
            "locations": [
                {   "name": "ground floor",
                    "url": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Sample_Floorplan.jpg"},
                {   "name": "first floor",
                    "url": "https://www.houseplanshelper.com/images/how-to-read-floor-plans-full-floor-plan.jpg"}
                ]
          
    })

    let markers1 = await project1.set('markers', {
        "markers": [

            {"marcin-timestamp": { 
                "id": "marcin-timestamp",
                "number": "A/12/22",
                "location": "ground floor",
                "locationOnDrawing": ["200", "400"],
                "materialsUsed": ["collar", "mastic"],
                "measurements": ["150", "150"],
                "service": ["pipe"],
                "completedBy": "username",
                "photos": ["url to photo 1", "url to photo 2"],
                "photos_after": ["url to photo 1", "url to photo 2"]
    
            }},
    
            {"carl-timestamp": { 
              "id": "carl-timestamp",
              "number": "B/12/22",
              "location": "first floor",
              "locationOnDrawing": ["200", "400"],
              "materialsUsed": ["firebatt", "mastic", "wrap"],
              "measurements": ["150", "150"],
              "service": ["duct", "cable"],
              "completedBy": "username",
              "photos_before": ["url to photo 1", "url to photo 2"],
              "photos_after": ["url to photo 1", "url to photo 2"]
    
          }}
        ]
    })

     // project2

     let project2 = db.collection('project2')

     let details2 = await project2.set('details', {
         
             "address": "some_address",
             "users": ["Adam", "Alexandr"],
             "materials": ["firebatt", "mastic", "collar", "wrap", "putty pad"],
             "services": ["steel beam", "pipe", "duct", "cable tray", "cable"],
             "locations": [
                 {"basement": "url to drawing"},
                 {"second floor": "url to drawing"}
                 ]
           
     })
 
     let markers2 = await project2.set('markers', {
         "markers": [
 
             {"marcin-timestamp": { 
                 "id": "marcin-timestamp",
                 "number": "A/12/22",
                 "location": "ground floor",
                 "locationOnDrawing": ["800", "800"],
                 "materialsUsed": ["collar", "mastic"],
                 "measurements": ["150", "150"],
                 "service": ["pipe"],
                 "completedBy": "username",
                 "photos": ["url to photo 1", "url to photo 2"],
                 "photos_after": ["url to photo 1", "url to photo 2"]
     
             }},
     
             {"carl-timestamp": { 
               "id": "carl-timestamp",
               "number": "B/12/22",
               "location": "first floor",
               "locationOnDrawing": ["100", "100"],
               "materialsUsed": ["firebatt", "mastic", "wrap"],
               "measurements": ["150", "150"],
               "service": ["duct", "cable"],
               "completedBy": "username",
               "photos_before": ["url to photo 1", "url to photo 2"],
               "photos_after": ["url to photo 1", "url to photo 2"]
     
           }}
         ]
     })

     return 'done'
}