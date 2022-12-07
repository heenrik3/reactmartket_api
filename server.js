import dotenv from 'dotenv'
import { connectDB } from './helpers/helpers.js'
import app from './app.js'
dotenv.config()

const port = process.env.PORT

const server = app

connectDB()

server.listen(port, () => {
  console.log(`Server listening on ${port}`)
})
