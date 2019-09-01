const express = require('express');
const cors = require("cors");
const requireDir = require('require-dir');
const dotenv = require('dotenv');


dotenv.config({  
    path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
  })

const app = express();


app.use(cors());

requireDir('./models');

app.use(express.json());

require('./controllers/ProjectController')(app);
require('./controllers/AuthController')(app);
app.use(require("./routes"));

app.listen(process.env.PORT || 3000, process.env.HOST);
