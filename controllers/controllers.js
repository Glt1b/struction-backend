
const { getUserDynamo,
    getProjectDynamo,
    postMarkerDynamo,
    delMarkerDynamo,
    patchMarkerDynamo } = require('../models/models.js');

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
        res.status(200).send(obj)
    })
}