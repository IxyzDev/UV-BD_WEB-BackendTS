import express from 'express';
const app = express();
const PORT = 3000;
//import db from './models';
const db = require('./models')

//importar jsn con prefabs
// import {users} from './seeders/users.ts';

import indexRoutes from './routes/_index.routes'
import publicationRoutes from './routes/_publication.routes'

db.sequelize.sync().then(()=> {
  app.use(express.json()) // middleware que transforma la req.body a un json

  app.get('/ping', (_req, res) => {
    console.log('Pinged')
    res.send('pong')
  })

  app.use('/api/diaries', indexRoutes)
  app.use('/publication', publicationRoutes )

  app.listen(PORT, () => {
  console.log(`Se escucha ${PORT}`)
})
})


