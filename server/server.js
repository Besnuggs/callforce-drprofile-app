require('dotenv').config();
const express = require('express'),
    app = express()
const { PORT } = process.env;




const port = PORT || 5100
app.listen(port, () => console.log(`Listening on port ${port}`))