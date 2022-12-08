import express from 'express'
import cors from 'cors'
import productRouter from './routes/productRouter.js'

const app = express()

app.use(
  cors({
    origin: 'https://reactmarket-seven.vercel.app/',
  })
)
app.use('/', (req, res, next) => {
  console.log(`Request ${req.method} at ${req.url}`)

  next()
})

app.use('/products', productRouter)

export default app
