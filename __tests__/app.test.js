const request = require('supertest');
const app = require('../app');

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
    test('404 - respond with project does not exist', () => {
        return request(app)
        .get('/api/projects/ascd')
        .expect(404)
        .then((res) => {
            expect(res.body.msg).toEqual('Project not found');
        })
    })
})

describe('POST/api/markers/:project_name', () => {
    test('200 - respond with updated markers object', () => {
        marker = {
            "marcin/timestamp": { 
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