import mongoose from 'mongoose'
import slugify from 'slugify'

const schemaDefinition = {
  name: String,
  image: String,
  isOrganic: Boolean,
  from: String,
  nutrients: [String],
  quantity: String,
  price: String,
  description: String,
  slug: String,
}

const schema = mongoose.Schema(schemaDefinition)

schema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true })

  next()
})

const Product = mongoose.model('Product', schema)

export default Product
