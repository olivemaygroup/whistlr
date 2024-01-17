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
const adminRoutes = require('./routes/admin.jsx')

// Middleware and routes
app
  .use(cors())
  .use(express.json())
  .use((req, res, next) => {
    console.log(req.path, req.method);
    next();
  });

  app.use('/user', userRoutes)
  app.use('/profile', profileRoutes)
  app.use('/case', caseRoutes)
  app.use('/incident', incidentRoutes)
  app.use('/admin', adminRoutes)

  // Connect to DB and listen
const MongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/test'
const port = process.env.PORT || 3001;

  mongoose.connect(MongoURI)
    .then(() => {
      app.listen(process.env.PORT, () => {
        console.log('Connected to the DB and listening on port ', port)
      })
    })
    .catch((error) => {
      console.log(error)
    })