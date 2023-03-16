
const { getUserDynamo,
    getProjectDynamo,
    postMarkerDynamo,
    delMarkerDynamo,
    patchMarkerDynamo,
    getImageS3,
    postImageS3,
    delImageS3} = require('../models/models.js');


exports.getUser = (req, res) => {
    getUserDynamo(req.params.username).then((result) => {
        if(result ===  null){
            res.status(404).send({msg: 'User not found'})
        } else {
        res.status(200).send({user: result})
        }
    })
}

exports.getProject = (req, res) => {
    getProjectDynamo(req.params.project_name).then((result) => {
        if(result.project[0] ===  null ){
            res.status(404).send({msg: 'Project not found'})
        } else {
            res.status(200).send({result})
        }
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

    console.log(req)

    postImageS3(req.params.image_id, req.body.data).then((result) => {
        res.status(201).send()
    })
}

exports.delImage = (req, res) => {
    delImageS3(req.params.image_id).then((result) => {
        res.status(204).send()
    })
}
