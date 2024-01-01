process.env.CYCLIC_DB = 'https://struction-backend.cyclic.app'
const CyclicDB = require('@cyclic.sh/dynamodb')
const db = CyclicDB('tan-outrageous-ostrichCyclicDB')

run = async function(){

    //users 
  
    let users = db.collection('users')

    let usersList = await users.set('users', {
        "users": ['m.palenik2015@gmail.com', 'pawelkinasz3@gmail.com', 'andriusgerdauskas01@gmail.com', 'miroslavhresan39@gmail.com', 'info@ampaconstruction.co.uk',
    'andrii199012345@gmail.com', 'drogobitskiy@gmail.com', 'kamill2468@gmail.com', 'dan.brown@mbcbuilding.co.uk', 'tony.corr@mbcbuilding.co.uk', 'lee.cunningham@mbcbuilding.co.uk',
'alicjaputyra89@gmail.com', 'radu.moraru.94@gmail.ru', 'anatolierijenco@gmail.com', 'sv4win@gmail.com', 'kamiltubis@vp.pl', 'csercsakornelia1@gmail.com',
'dominic.gregory@warden.co.uk', 'michael.holt@warden.co.uk', 'joe.ashton@warden.co.uk', 'jim.d112@yahoo.com', 'poke.kzg@gmail.com', 'kolya.kuzmych.1995.kosmirak@gmail.com',
'matthew.roadley@ventrogroup.com', 'renepompa66@gmail.com', 'stevopompa66@gmail.com', 'as1st.vip0806@gmail.com', 'm.gnurf80@gmail.com', 'alexandr18031983@gmail.com', 'kirilukoleksandr0@gmail.com',
'robertgreg1945@gmail.com', 'alexandrmikhalchan@gmail.com', 'synyshyn.serhiy@gmail.com', 'tolian1174@gmail.com', 'borysevy4i@gmail.com', 'marcin.mitura@wp.pl', 'ashley@udc-ltd.co.uk',
'mateusz.kolus1@gmail.com', 'tomagyi1606@gmail.com', 'andrii199012345@gmail.com']
    })

    let test_user = await users.set('andrii199012345@gmail.com', {
        "name": "Andrii Bohoslaviec",
        "role": "Operative",
        "password": "Andrii123",
        "code": "",
        "projects": []
    })  
   /*
 
 
  /*
    // list of projects

    let projects = db.collection('projects')
    let list = await projects.get('list');

    console.log(list)


    let projectsList = await projects.set('list', {
        "list": [
      'Carys Bannister',
      'Coupland Building 1',
      'Ellen Wilkinson Building',
      'Horniman House.',
      'Hulme Hall  Burkhardt',
      'Hulme Hall - Houldsworth',
      'Hulme Hall-Gym and Squash',
      'Humanities Bridgeford Street',
      'Kingsbridge Court',
      'Macclesfield District General Hospital',
      'Mansfield Cooper Building',
      'Martin Harris Building',
      'Simon Building',
      'Skipton Academy',
      'St Annes Voluntary Academy',
      'St Anselm Hall',
      'Stephen Joseph Studio',
      'Stopford Building',
      'Sudgen Sport Centre',
      'Test project',
      'The Fairways Liverpool',
      'Woolton Views',
      'Samuel Alexander',
      'Edward Grant',
      'Annie Derby',
      'Ashton Park',
      'Vaughan House',
      'Apprentice Court',
      'Sir Robert Thomas',
      'Museum Building',
      'Aldbourne Court',
      'Harry Piggot',
      'Humphreys Court',
      'Mossbrook Court'

    ]
    })
 */
    
    

    
    // project1
 /*

    let apartments_unit_ = db.collection('Macclesfield District General Hospital')

    let x = await apartments_unit_.get('details');

    console.log(x.props.locations)
  
    let details1 = await apartments_unit_.set('details', {
        
            "address": "some_address",
            "users": ["Marcin Palenik"],
            "materials": ["firebatt", "mastic", "collar", "wrap", "putty pad"],
            "services": ["steel beam", "pipe", "duct", "cable tray", "cable"],
            "locations": [
                {
                  name: 'Ground floor ',
                  url: 'Macclesfield District General Hospital-Ground floor '
                },
                {
                  name: 'First floor ',
                  url: 'Macclesfield District General Hospital-First floor '
                }
              ]
          
    }) 
    
    /*
 
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
    }) */
    /*

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