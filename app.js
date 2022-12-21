const express = require('express');


const { getUser, getProject, postMarker, delMarker } = require('./controllers/controllers.js');

const app = express();
app.use(express.json());

app.get('/api/users/:username', getUser);
app.get('/api/projects/:project_name', getProject);

app.post('/api/markers/:project_name', postMarker);

app.delete('/api/:project_name/:marker_id', delMarker);


app.all('/*', (req, res) => {
    res.status(404).send({ msg: 'Path not found' });
  });
  

module.exports = app;