const express = require('express');
const routes = express.Router();
const Toolscontroller = require(__dirname+"/controllers/Toolscontroller");
const autMiddleware = require('./middlewares/auth')

routes.use(autMiddleware)

routes.get("/tools",Toolscontroller.show);
routes.delete('/tools/:id',Toolscontroller.destroy);
routes.post('/tools',Toolscontroller.store);

module.exports = routes;
