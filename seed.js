process.env.CYCLIC_DB = 'https://struction-backend.cyclic.app'
const CyclicDB = require('@cyclic.sh/dynamodb')
const db = CyclicDB('tan-outrageous-ostrichCyclicDB')

run = async function(){

    // users

    let users = db.collection('users')

    let test_user = await users.set('m.palenik@gmail.com', {
        "name": "Marcin Palenik",
        "role": "manager",
        "password": "worker123",
        "projects": ["apartments-unit_", "medical-centre_"]
    })

    // project1

    let apartments_unit_ = db.collection('apartments_unit_')

    let details1 = await apartments_unit_.set('details', {
        
            "address": "some_address",
            "users": ["Marcin", "Carl"],
            "materials": ["firebatt", "mastic", "collar", "wrap", "putty pad"],
            "services": ["steel beam", "pipe", "duct", "cable tray", "cable"],
            "locations": [
                {   "name": "ground floor",
                    "url": "apartments-ground-floor"},
                {   "name": "first floor",
                    "url": "apartments-first-floor"}
                ]
          
    })

    let markers1 = await apartments_unit_.set('markers', {
        "markers": [

            {"marcin-timestamp1": { 
                "id": "marcin-timestamp1",
                "number": "A/12/22",
                "status": "completed",
                "location": "ground floor",
                "locationOnDrawing": ["100", "900"],
                "materialsUsed": ["collar", "mastic"],
                "measurements": ["150", "150"],
                "service": ["pipe"],
                "completedBy": "username",
                "comment": "",
                "photos": ["marker1"],
                "photos_after": ["url_1", "url_2"]
    
            }},

            {"marcin-timestamp2": { 
                "id": "marcin-timestamp2",
                "number": "A/12/22",
                "status": "completed",
                "location": "ground floor",
                "locationOnDrawing": ["100", "2500"],
                "materialsUsed": ["collar", "mastic"],
                "measurements": ["150", "150"],
                "service": ["pipe"],
                "completedBy": "username",
                "comment": "",
                "photos": [],
                "photos_after": ["url to photo 1", "url to photo 2"]
    
            }},

            {"marcin-timestamp3": { 
                "id": "marcin-timestamp3",
                "number": "A/12/22",
                "status": "toBeDone",
                "location": "ground floor",
                "locationOnDrawing": ["900", "800"],
                "materialsUsed": ["collar", "mastic"],
                "measurements": ["150", "150"],
                "service": ["pipe"],
                "completedBy": "username",
                "comment": "",
                "photos": [],
                "photos_after": ["url to photo 1", "url to photo 2"]
    
            }},
    
            {"carl-timestamp": { 
              "id": "carl-timestamp",
              "number": "B/12/22",
              "status": "issue",
              "location": "first floor",
              "locationOnDrawing": ["200", "400"],
              "materialsUsed": ["firebatt", "mastic", "wrap"],
              "measurements": ["150", "150"],
              "service": ["duct", "cable"],
              "completedBy": "username",
              "comment": "",
              "photos": [],
              "photos_after": []
    
          }}
        ]
    })

     // project2

     let medical_centre_ = db.collection('medical_centre_')

     let details2 = await medical_centre_.set('details', {
         
             "address": "some_address",
             "users": ["Adam", "Alexandr"],
             "materials": ["firebatt", "mastic", "collar", "wrap", "putty pad"],
             "services": ["steel beam", "pipe", "duct", "cable tray", "cable"],
             "locations": [
                {   "name": "basement",
                    "url": "project2-basement"},
                {   "name": "second floor",
                    "url": "project2-second_floor"}
                ]
           
     })
 
     let markers2 = await medical_centre_.set('markers', {
         "markers": [
 
             {"alexandr-timestamp": { 
                 "id": "alexandr-timestamp",
                 "number": "A/12/22",
                 "status": "completed",
                 "location": "basement",
                 "locationOnDrawing": ["800", "800"],
                 "materialsUsed": ["collar", "mastic"],
                 "measurements": ["150", "150"],
                 "service": ["pipe"],
                 "completedBy": "username",
                 "comment": "",
                 "photos": [],
                 "photos_after": ["url to photo 1", "url to photo 2"]
     
             }},
     
             {"adam-timestamp": { 
               "id": "adam-timestamp",
               "number": "B/12/22",
               "status": "completed",
               "location": "second floor",
               "locationOnDrawing": ["100", "100"],
               "materialsUsed": ["firebatt", "mastic", "wrap"],
               "measurements": ["150", "150"],
               "service": ["duct", "cable"],
               "completedBy": "username",
               "comment": "",
               "photos": [],
               "photos_after": ["url to photo 1", "url to photo 2"]
     
           }}
         ]
     })

     

     let itemTestUser = await users.get('test_user')
     let itemDetails1 = await apartments_unit_.get('details')
     let itemMarkers1 = await apartments_unit_.get('markers')
     let itemDetails2 = await medical_centre_.get('details')
     let itemMarkers2 = await medical_centre_.get('markers')


     console.log(itemTestUser, itemDetails1, itemMarkers1.props.markers, itemDetails2, itemMarkers2)
}
run()