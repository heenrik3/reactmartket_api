import fs from 'fs'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import Product from '../model/productModel.js'
import { connectDB } from './helpers.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config()

await connectDB()

// READ JSON FILE
const produtos = JSON.parse(
  fs.readFileSync(`${__dirname}/products.json`, 'utf-8')
)

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Product.create(produtos)
    // await User.create(users, { validateBeforeSave: false })
    // await Review.create(reviews)
    console.log('Data successfully loaded!')
  } catch (err) {
    console.log(err)
  }
  process.exit()
}

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Product.deleteMany()

    console.log('Data successfully deleted!')
  } catch (err) {
    console.log(err)
  }
  process.exit()
}

if (process.argv[2] === '--import') {
  importData()
} else if (process.argv[2] === '--delete') {
  deleteData()
}
