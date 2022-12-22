const express = require("express");

const {
  getUser,
  getProject,
  postMarker,
  delMarker,
  patchMarker,
  getDrawing
} = require("./controllers/controllers.js");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/users/:username", getUser);
app.get("/api/projects/:project_name", getProject);
app.get("/api/plan", getDrawing)

app.post("/api/markers/:project_name", postMarker);

app.delete("/api/:project_name/:marker_id", delMarker);

app.patch("/api/:project_name/:marker_id", patchMarker);

app.all("/*", (req, res) => {
  res.status(404).send({ msg: "Path not found" });
});

module.exports = app;
