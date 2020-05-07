require('dotenv').config();
const express = require('express'),
    app = express(),
    ctrl = require('./controllers/dentistController')
const { SERVER_PORT } = process.env;

app.get('/api/getDb/', ctrl.getData)
app.post('/api/postDb', ctrl.postData)
app.put('/api/putDb', ctrl.putData)
app.delete('/api/deleteDb', ctrl.deleteData)

const port = SERVER_PORT || 5100
app.listen(port, () => console.log(`Listening on port ${port}`))