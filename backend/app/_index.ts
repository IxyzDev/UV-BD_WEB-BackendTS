import express from 'express'

import indexRoutes from './routes/index.routes'
import publicationRoutes from './routes/publication.routes'

const app = express( )
app.use(express.json()) // middleware que transforma la req.body a un json

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('Pinged')
  res.send('pong')
})

app.use('/api/diaries', indexRoutes)
app.use('/publication', publicationRoutes )

app.listen(PORT, () => {
  console.log(`Se escucha ${PORT}`)
})
