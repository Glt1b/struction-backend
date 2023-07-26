
const { getUserDynamo,
    getProjectDynamo,
    postMarkerDynamo,
    delMarkerDynamo,
    patchMarkerDynamo,
    getImageS3,
    postImageS3,
    delImageS3,
    postUserDynamo,
    deleteUserDynamo,
    postUsersListDynamo,
    getUsersListDynamo,
    getProjectsListDynamo,
    postProjectsListDynamo,
    postProjectDynamo,
    setupMarkersDynamo} = require('../models/models.js');

// setup project

exports.setupMarkers = (req, res) => {
    setupMarkersDynamo(req.params.project_name).then(() => {
        res.status(201).send('done')
    })
}
exports.getProjectsList = (req, res) => {
    getProjectsListDynamo().then((result) => {
        res.status(200).send({list: result})
    })
}

exports.postProjectsList = (req, res) => {
    postProjectsListDynamo(req.body).then(() => {
        res.status(201).send('done')
    })
}

exports.getUser = (req, res) => {
    getUserDynamo(req.params.username).then((result) => {
        if(result ===  null){
            res.status(404).send({msg: 'User not found'})
        } else {
        res.status(200).send({users: result})
        }
    })
}

exports.postUser = (req, res) => {
    postUserDynamo(req.params.username, req.body).then((result) => {
        console.log(req.body)
        res.status(200).send('done')
    })
}

exports.deleteUser = (req, res) => {
    deleteUserDynamo(req.params.username).then(() => {
        res.status(204).send()
    })
}

exports.getUsersList = (req, res) => {
    getUsersListDynamo().then((result) => {
        res.status(200).send({list: result})
    })
}

exports.postUsersList = (req, res) => {
    postUsersListDynamo(req.body).then((result) => {
        res.status(200).send({list: result})
    })
}

// project details

exports.getProject = (req, res) => {
    getProjectDynamo(req.params.project_name).then((result) => {
        if(result.project[0] ===  null ){
            res.status(404).send({msg: 'Project not found'})
        } else {
            res.status(200).send({result})
        }
    })
}

exports.postProject = (req, res) => {
    postProjectDynamo(req.params.project_name, req.body).then(() => {
        res.status(201).send({msg: 'updated'})
    })
}

exports.postMarker = (req, res) => {
    postMarkerDynamo(req.params.project_name, req.body).then((result) => {
        const obj = {markers: result}
        res.status(200).send(obj)
    })
}

exports.delMarker = (req, res) => {
    delMarkerDynamo(req.params.project_name, req.params.marker_id).then((result) => {
        const obj = {markers: result}
        res.status(200).send(obj)
    })
}

exports.patchMarker = (req, res) => {
    patchMarkerDynamo(req.params.project_name, req.params.marker_id, req.body).then((result) => {
        const obj = {markers: result}
        console.log(obj)
        res.status(200).send(obj)
    })
}

// images

exports.getImage = (req, res) => {
    getImageS3(req.params.image_id).then((result) => {
        obj = {image: result}
        res.status(200).send(obj)
    })
}

exports.postImage = (req, res) => {
    postImageS3(req.params.image_id, req.body.data).then((result) => { 
        res.status(201).send()
    })
}

exports.delImage = (req, res) => {
    delImageS3(req.params.image_id).then((result) => {
        res.status(204).send()
    })
}
