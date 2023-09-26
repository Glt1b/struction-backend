process.env.CYCLIC_DB = 'https://struction-backend.cyclic.app'
const CyclicDB = require('@cyclic.sh/dynamodb')
const db = CyclicDB('tan-outrageous-ostrichCyclicDB')

run = async function(){

    // users
    /* 
    let users = db.collection('users')

    let usersList = await users.set('users', {
        "users": ['m.palenik2015@gmail.com', 'pawelkinasz3@gmail.com', 'andriusgerdauskas01@gmail.com', 'miroslavhresan39@gmail.com', 'info@ampaconstruction.co.uk',
    'andrii199012345@gmail.com', 'drogobitskiy@gmail.com', 'kamill2468@gmail.com', 'dan.brown@mbcbuilding.co.uk', 'tony.corr@mbcbuilding.co.uk']
    })

    let test_user = await users.set('tony.corr@mbcbuilding.co.uk', {
        "name": "Tony Corr",
        "role": "Operative",
        "password": "tony.corr123@mbcbuilding.co.uk",
        "code": "",
        "projects": []
    })
*/
   

    // list of projects

    let projects = db.collection('projects')
    let list = await projects.get('list');

    console.log(list)


    let projectsList = await projects.set('list', {
        "list": [
      'Stopford Building',
      'Mansfield Cooper Building',
      'Hulme Hall - Houldsworth',
      'Horniman House.',
      'St Annes Voluntary Academy',
      'Test project',
      'Hulme Hall  Burkhardt',
      'Simon Building',
      'Hulme Hall-Gym and Squash',
      'Martin Harris Building',
      'Ellen Wilkinson Building',
      'Sudgen Sport Centre',
      'Carys Bannister',
      'Coupland Building 1',
      'St Anselm Hall',
      'Stephen Joseph Studio',
      'Humanities Bridgeford Street'
    ]
    })
/*
    */
    

    
    
    
    
    // project1
 
/*
    let apartments_unit_ = db.collection('Test project')

    let x = await apartments_unit_.get('details');

    console.log(x.props.locations)
   
    let details1 = await apartments_unit_.set('details', {
        
            "address": "some_address",
            "users": ["Marcin Palenik"],
            "materials": ["firebatt", "mastic", "collar", "wrap", "putty pad"],
            "services": ["steel beam", "pipe", "duct", "cable tray", "cable"],
            "locations": [
                { name: 'First floor ', url: 'Test project-First floor ' },
                { name: 'Second floor', url: 'Test project-Second floor' }
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
                "materialsUsed": [
                    {"Ablative batt": ["150", "200", "0", "1"]},
                    {"Collar": ["0", "0", "110", "2"]}
                ],
                "measurements": ["150", "150"],
                "service": ["pipe"],
                "completedBy": "username",
                "comment": "",
                "photos": [],
                "photos_after": ["url_1", "url_2"],
                "fR": '30',
                "type": "seal",
                "doorConfiguration": '',
                "doorGapHinge": '',
                "doorGapLockSide": '',
                "doorGapHead": '',
                "doorGapBottom": '',
                "openingHeight": '',
                "visionPanel": '',
                "frameCondition": '',
                "frameConditionComment": '',
                "hingeAdjustment": '',
                "ironmongery": '',
                "handle": '',
                "lock": '',
                "doorCondition": ''

    
            }},

            {"marcin-timestamp2": { 
                "id": "marcin-timestamp2",
                "number": "A/12/22",
                "status": "completed",
                "location": "ground floor",
                "locationOnDrawing": ["100", "2500"],
                "materialsUsed": [
                    {"Ablative batt": ["150", "200", "0", "1"]},
                    {"Collar": ["0", "0", "110", "2"]}
                ],
                "measurements": ["150", "150"],
                "service": ["pipe"],
                "completedBy": "username",
                "comment": "",
                "photos": [],
                "photos_after": ["url to photo 1", "url to photo 2"],
                "fR": '30',
                "type": "seal",
                "doorConfiguration": '',
                "doorGapHinge": '',
                "doorGapLockSide": '',
                "doorGapHead": '',
                "doorGapBottom": '',
                "openingHeight": '',
                "visionPanel": '',
                "frameCondition": '',
                "frameConditionComment": '',
                "hingeAdjustment": '',
                "ironmongery": '',
                "handle": '',
                "lock": '',
                "doorCondition": ''
    
            }},

            {"marcin-timestamp3": { 
                "id": "marcin-timestamp3",
                "number": "A/12/22",
                "status": "toBeDone",
                "location": "ground floor",
                "locationOnDrawing": ["900", "800"],
                "materialsUsed": [
                    {"Ablative batt": ["150", "200", "0", "1"]},
                    {"Collar": ["0", "0", "110", "2"]}
                ],
                "measurements": ["150", "150"],
                "service": ["pipe"],
                "completedBy": "username",
                "comment": "",
                "photos": [],
                "photos_after": ["url to photo 1", "url to photo 2"],
                "fR": '30',
                "type": "seal",
                "doorConfiguration": '',
                "doorGapHinge": '',
                "doorGapLockSide": '',
                "doorGapHead": '',
                "doorGapBottom": '',
                "openingHeight": '',
                "visionPanel": '',
                "frameCondition": '',
                "frameConditionComment": '',
                "hingeAdjustment": '',
                "ironmongery": '',
                "handle": '',
                "lock": '',
                "doorCondition": ''
    
            }},
    
            {"carl-timestamp": { 
              "id": "carl-timestamp",
              "number": "B/12/22",
              "status": "issue",
              "location": "first floor",
              "locationOnDrawing": ["200", "400"],
              "materialsUsed": [
                {"Ablative batt": ["150", "200", "0", "1"]},
                {"Collar": ["0", "0", "110", "2"]}
            ],
              "measurements": ["150", "150"],
              "service": ["duct", "cable"],
              "completedBy": "username",
              "comment": "",
              "photos": [],
              "photos_after": [],
              "fR": '30',
              "type": "seal",
              "doorConfiguration": '',
              "doorGapHinge": '',
              "doorGapLockSide": '',
              "doorGapHead": '',
              "doorGapBottom": '',
              "openingHeight": '',
              "visionPanel": '',
              "frameCondition": '',
              "frameConditionComment": '',
              "hingeAdjustment": '',
              "ironmongery": '',
              "handle": '',
              "lock": '',
              "doorCondition": ''
    
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
                 "materialsUsed": [
                    {"Ablative batt": ["150", "200", "0", "1"]},
                    {"Collar": ["0", "0", "110", "2"]}
                ],
                 "measurements": ["150", "150"],
                 "service": ["pipe"],
                 "completedBy": "username",
                 "comment": "",
                 "photos": [],
                 "photos_after": ["url to photo 1", "url to photo 2"],
                 "fR": '30',
                 "type": "seal",
                 "doorConfiguration": '',
                 "doorGapHinge": '',
                 "doorGapLockSide": '',
                 "doorGapHead": '',
                 "doorGapBottom": '',
                 "openingHeight": '',
                 "visionPanel": '',
                 "frameCondition": '',
                 "frameConditionComment": '',
                 "hingeAdjustment": '',
                 "ironmongery": '',
                 "handle": '',
                 "lock": '',
                 "doorCondition": ''
     
             }},
     
             {"adam-timestamp": { 
               "id": "adam-timestamp",
               "number": "B/12/22",
               "status": "completed",
               "location": "second floor",
               "locationOnDrawing": ["100", "100"],
               "materialsUsed": [
                {"Ablative batt": ["150", "200", "0", "1"]},
                {"Collar": ["0", "0", "110", "2"]}
            ],
               "measurements": ["150", "150"],
               "service": ["duct", "cable"],
               "completedBy": "username",
               "comment": "",
               "photos": [],
               "photos_after": ["url to photo 1", "url to photo 2"],
               "fR": '30',
               "type": "seal",
               "doorConfiguration": '',
               "doorGapHinge": '',
               "doorGapLockSide": '',
               "doorGapHead": '',
               "doorGapBottom": '',
               "openingHeight": '',
               "visionPanel": '',
               "frameCondition": '',
               "frameConditionComment": '',
               "hingeAdjustment": '',
               "ironmongery": '',
               "handle": '',
               "lock": '',
               "doorCondition": ''
     
           }}
         ]
     })

 
    
     

     //let itemTestUser = await users.get('test_user')
     let list = await users.get('users')
     //let itemMarkers1 = await apartments_unit_.get('markers')
     //let itemDetails2 = await medical_centre_.get('details')
     //let itemMarkers2 = await medical_centre_.get('markers')

     console.log(list)
     //console.log(itemTestUser, itemDetails1, itemMarkers1.props.markers, itemDetails2, itemMarkers2)

*/
    }

//run()