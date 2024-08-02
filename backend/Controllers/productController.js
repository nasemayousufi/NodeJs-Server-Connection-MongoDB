const Product = require('../Models/productModel');
const data = require("../data");

const CreateAllProduts = async (req, res) => {
 try {
    const createdProducts = await Product.insertMany(data.products);
    res.status(201).send({ createdProducts });
 } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const GetAllProducts = async (req, res) => {
    const products = await Product.find({});
    res.send(products);
};

const GetProductByID = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if(product){
    res.status(200).send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
};

const AdminCreateNewProduct = async (req, res) => {
  const product = new Product({
     name: req.body.name + Date.now(),
     image: req.body.image,
     price: req.body.price,
     category: req.body.category,
     brand: req.body.brand,
     countInStock: req.body.countInStock,
     rating: req.body.rating,
     numReviews: req.body.numReviews,
     description: req.body.description
  });
  const createdProduct = await product.save();
  res.status(201).send({ message: 'New Product Created', product: createdProduct });
};

const UpdateProductByID = async (req, res) => {
   const productId = req.params.id;
   const product = await Product.findById(productId);
   if(product){
      product.name = req.body.name + Date.now();
      product.image = req.body.image;
      product.price = req.body.price;
      product.category = req.body.category;
      product.brand = req.body.brand;
      product.countInStock = req.body.countInStock;
      product.description = req.body.description;
      
    const updatedProduct = await product.save();
    res.send({ message: 'Product Updated', product: updatedProduct });
   } else {
     res.status(404).send({ message: 'Product Not Updated' });
   }
};

const DeleteProductByID = async (req, res) => {
    const productId = req.params.id;
    try {
      const product = await Product.findById(productId);
     if(product) {
         await product.remove();
         res.send({ message: 'Product Deleted' });
       } else {
         res.status(404).send({ message: 'Product Not Found' });
      }
    } catch {
        res.status(500).send({ message: 'Error Deleting Product' });
    }
};

module.exports = {
    CreateAllProduts,
    GetAllProducts,
    GetProductByID,
    AdminCreateNewProduct,
    UpdateProductByID,
    DeleteProductByID
};