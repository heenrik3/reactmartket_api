import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

export async function connectDB() {
  const DB = process.env.DB.replace(
    '<PASSWORD>'.toLowerCase(),
    process.env.DB_PASS
  )

  mongoose.set('strictQuery', false)

  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log('Connected to Database.')
  } catch (error) {
    console.log(error)
  }
}
