require('dotenv').config();
const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');

// App
const app = express();

// Routers
const userRoutes = require('./routes/user.jsx')
const profileRoutes = require('./routes/profile.jsx')
const caseRoutes = require('./routes/case.jsx')
const incidentRoutes = require('./routes/incident.jsx')

// Middleware and routes
app
  .use(cors())
  .use(express.json())
  .use((req, res, next) => {
    console.log(req.path, req.method);
    next();
  });

  app.use('/user', userRoutes)
  app.use('/user', profileRoutes)
  app.use('/case', caseRoutes)
  app.use('/incident', incidentRoutes)

  // Connect to DB and listen
  mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      app.listen(process.env.PORT, () => {
        console.log('Connected to the DB and listening on port ', process.env.PORT)
      })
    })
    .catch((error) => {
      console.log(error)
    })