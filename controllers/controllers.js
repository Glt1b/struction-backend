
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
    postProjectDynamo} = require('../models/models.js');

const nodemailer = require('nodemailer');

// setup project


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

exports.getCode = (req, res) => {
    // generate code
    const randomNum = Math.floor(Math.random() * 9000) + 1000;
    const code = randomNum.toString();
    // send code to email
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com", // SMTP server host
        port: 587, // SMTP port (typically 587 for TLS)
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        },
        logger: true, // Enable logging
        debug: true // Show debug output
    });
    
    // Setup email data
    let mailOptions = {
        from: '"Marcin Palenik" <marcin.palenik@ampa-construction.co.uk>', // sender address
        to: req.params.username, // list of receivers
        subject: "Ampa Construction Code", // Subject line
        text: `Your code is: ${code}`, // plain text body
        html: "<b>Hello world?</b>" // html body
    };
    
    // Send mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    });


    res.status(200).send({code: code})
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
        if(result){
            res.status(201).send(result)
        } else {
            res.status(500).send('error')
        }
        
    })
}

exports.delImage = (req, res) => {
    delImageS3(req.params.image_id).then((result) => {
        res.status(204).send()
    })
}
