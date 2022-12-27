process.env.CYCLIC_DB = 'https://struction-backend.cyclic.app'
const CyclicDB = require('@cyclic.sh/dynamodb')
const db = CyclicDB('tan-outrageous-ostrichCyclicDB')

run = async function(){

    // users

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
                {   "name": "basement",
                    "url": "https://wpmedia.roomsketcher.com/content/uploads/2021/12/14164614/RoomSketcher-House-Floor-Plans-2452430-800.jpg"},
                {   "name": "second floor",
                    "url": "https://wcs.smartdraw.com/floor-plan/img/floor-plan-design.png?bn=15100111860"}
                ]
           
     })
 
     let markers2 = await project2.set('markers', {
         "markers": [
 
             {"alexandr-timestamp": { 
                 "id": "alexandr-timestamp",
                 "number": "A/12/22",
                 "location": "basement",
                 "locationOnDrawing": ["800", "800"],
                 "materialsUsed": ["collar", "mastic"],
                 "measurements": ["150", "150"],
                 "service": ["pipe"],
                 "completedBy": "username",
                 "photos": ["url to photo 1", "url to photo 2"],
                 "photos_after": ["url to photo 1", "url to photo 2"]
     
             }},
     
             {"adam-timestamp": { 
               "id": "adam-timestamp",
               "number": "B/12/22",
               "location": "second floor",
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

     //let itemTestUser = await users.get('test_user')
    // let itemDetails1 = await project1.get('details')
    // let itemMarkers1 = await project1.get('markers')
     //let itemDetails2 = await project2.get('details')
     //let itemMarkers2 = await project2.get('markers')


     //console.log(itemTestUser, itemDetails1, itemMarkers1.props, itemDetails2, itemMarkers2)
}
run()