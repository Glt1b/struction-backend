const AWS = require("aws-sdk");
const fs = require('fs')
const s3 = new AWS.S3()
const bucket = 'cyclic-tan-outrageous-ostrich-eu-central-1'



const storage = async function (){

    const  image = fs.readFileSync('./plan.jpg');

    const uploadedImage = await s3.upload({
        Bucket: bucket,
        Key: 'plan.jpg',
        Body: image,
      }).promise()

    let my_file = await s3.getObject({
        Bucket: bucket,
        Key: "test.jpg",
    }).promise()

    //const buffer = Buffer.from(my_file, "base64");

   console.log(my_file.Body)


}

storage()