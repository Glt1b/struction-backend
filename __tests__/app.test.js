const request = require('supertest');
const app = require('../app');

const seed = require('../seed.js')

beforeEach(() => seed);

describe('GET/api/users/:username', () => {
    test('200 - respond with user object', () => {
        return request(app)
        .get('/api/users/test_user')
        .expect(200)
        .then((res) => {
            expect(res.body.user).toBeInstanceOf(Object)
        })
    })
    test('404 - respond with user does not exist', () => {
        return request(app)
        .get('/api/users/test_')
        .expect(404)
        .then((res) => {
            expect(res.body.msg).toEqual('User not found');
        })
    })
})

describe('GET/api/projects/:project_name', () => {
    test('200 - respond with project object', () => {
        return request(app)
        .get('/api/projects/project1')
        .expect(200)

    })

})

describe('POST/api/markers/:project_name', () => {
    test('200 - respond with updated markers object', () => {
        marker = {
            "user-timestamp": { 
                "id": "user-timestamp",
                "number": "new number",
                "location": "another floor",
                "locationOnDrawing": ["200", "400"],
                "materialsUsed": ["collar", "mastic"],
                "measurements": ["150", "150"],
                "service": ["pipe"],
                "completedBy": "username",
                "photos": ["url to photo 1", "url to photo 2"],
                "photos_after": ["url to photo 1", "url to photo 2"]
    
            }
        }
        return request(app)
        .post('/api/markers/project1')
        .send(marker)
        .expect(200)

    })
   
})

describe('DELETE/api/:project_name/:marker_id', () => {
    test('204 - respond with project object', () => {
        return request(app)
        .delete('/api/project1/marcin-timestamp')
        .expect(200)

    })

})

describe('PATCH/api/:project_name/:marker_id', () => {
    test('204 - respond with project object', () => {
        marker = {
            "carl-timestamp": { 
                "id": "carl-timestamp",
                "number": "updated number",
                "location": "ground floor",
                "locationOnDrawing": ["200", "400"],
                "materialsUsed": ["collar", "mastic"],
                "measurements": ["150", "150"],
                "service": ["pipe"],
                "completedBy": "username",
                "photos": ["url to photo 1", "url to photo 2"],
                "photos_after": ["url to photo 1", "url to photo 2"]
        }}
        return request(app)
        .patch('/api/project1/carl-timestamp')
        .send(marker)
        .expect(200)
    })
})

describe('GET/plan', () => {
    test('200 - respond with plan', () => {
        return request(app)
        .get('/api/image/plan1.jpeg')
        .expect(200)

    })

})