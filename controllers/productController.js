import Product from '../model/productModel.js'

export async function getAll(req, res, next) {
  try {
    const products = await Product.find()

    res.status(200).json({
      status: 'success',
      results: products.length,
      data: {
        products,
      },
    })
  } catch (error) {
    res
      .status(400)
      .json({
        status: 'fail',
        message: 'An error occurred while retrieving all products.',
      })
  }
}

export async function getOne(req, res, next) {
  try {
    const product = await Product.findOne({ slug: req.params.slug })
    if (!product) throw 'No product found with the given slug.'

    res.status(200).json({
      status: 'success',
      data: product,
    })
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    })
  }
}
