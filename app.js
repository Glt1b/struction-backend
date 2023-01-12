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
app.use(express.json());

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


app.get("/api/users/:username", getUser);
app.get("/api/projects/:project_name", getProject);

app.post("/api/markers/:project_name", postMarker);

app.delete("/api/markers/:project_name/:marker_id", delMarker);

app.patch("/api/:project_name/:marker_id", patchMarker);

// images
app.post("/api/image/:image_id", postImage);
app.get("/api/image/:image_id", getImage);
app.delete("/api/image/:image_id", delImage);

// error handling

app.all("/*", (req, res) => {
  res.status(404).send({ msg: "Path not found" });
});

module.exports = app;
