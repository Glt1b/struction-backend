const express = require("express");
const bodyParser = require('body-parser');

const {
  getUser,
  getProject,
  postMarker,
  delMarker,
  patchMarker,
  postImage,
  delImage,
  getImage,
  postUser,
  deleteUser,
  getUsersList,
  postUsersList,
  getProjectsList,
  postProjectsList,
  postProject,
  getCode
} = require("./controllers/controllers.js");

const cors = require("cors");
const app = express();

app.use(cors({origin: '*'}));
//app.use(express.json({limit: '10mb'}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true , limit: '50mb'}));

 /* 
app.use(function (req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', '*');

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
*/

// setup projects

app.get("/api/projects", getProjectsList);
app.post("/api/projects", postProjectsList);

// project data

app.get("/api/projects/:project_name", getProject);
app.post("/api/projects/:project_name", postProject);

app.post("/api/markers/:project_name", postMarker);
app.delete("/api/markers/:project_name/:marker_id", delMarker);
app.patch("/api/markers/:project_name/:marker_id", patchMarker);



// images
app.post("/api/image/:image_id", postImage);
app.get("/api/image/:image_id", getImage);
app.delete("/api/image/:image_id", delImage);

// users

app.get("/api/users", getUsersList);
app.get("/api/code/:username", getCode);
app.post("/api/users", postUsersList);

app.get("/api/users/:username", getUser);
app.post("/api/users/:username", postUser);
app.delete("/api/users/username", deleteUser);
// send code function

// error handling

app.all("/*", (req, res) => {
  res.status(404).send({ msg: "Path not found" });
});

module.exports = app;
