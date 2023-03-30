import express from 'express'
import path from 'path'
import divers from './routes/divers'
import dives from './routes/dives'
import join from './routes/join'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/divers', divers)
server.use('/api/v1/dives', dives)
server.use('/api/v1/join', join)

server.use('/api/*', (req, res) => res.sendStatus(404))

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

export default server
