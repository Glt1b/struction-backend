const express = require("express");

const {
  getUser,
  getProject,
  postMarker,
  delMarker,
  patchMarker,
  postImage,
  delImage,
  getImage
} = require("./controllers/controllers.js");

const cors = require("cors");
const app = express();

app.use(cors({origin: '*'}));
app.use(express.json({limit: '5mb'}));
// app.use(bodyParser.json({limit: '5mb'}));

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

app.get("/api/users/:username", getUser);
app.get("/api/projects/:project_name", getProject);

app.post("/api/markers/:project_name", postMarker);

app.delete("/api/markers/:project_name/:marker_id", delMarker);

app.patch("/api/markers/:project_name/:marker_id", patchMarker);

// images
app.post("/api/image/:image_id", postImage);
app.get("/api/image/:image_id", getImage);
app.delete("/api/image/:image_id", delImage);

// error handling

app.all("/*", (req, res) => {
  res.status(404).send({ msg: "Path not found" });
});

module.exports = app;
