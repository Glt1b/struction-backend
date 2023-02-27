const AWS = require("aws-sdk");
const fs = require('fs')
const s3 = new AWS.S3()
const bucket = 'cyclic-tan-outrageous-ostrich-eu-central-1'

const image = fs.readFileSync('./drawing1.jpg')



const storage = async function (){

    
    const uploadedImage = await s3.upload({
        Bucket: bucket,
        Key: 'project2-basement',
        Body: image,
      }).promise()
/*
    const del = await s3.deleteObject({
        Bucket: bucket,
        Key: 'project2-basement'
    }).promise()
*/
    let my_file = await s3.getObject({
        Bucket: bucket,
        Key: "project2-basement",
    }).promise()

    //const buffer = Buffer.from(my_file, "base64");

   console.log(my_file.Body)


}

storage()