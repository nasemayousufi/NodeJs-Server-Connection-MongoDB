const express = require('express');
const { isAdmin } = require('../utils');
const { CreateAllProduts, GetAllProducts, GetProductByID, AdminCreateNewProduct, UpdateProductByID, DeleteProductByID } = require("../Controllers/productController");

const productRouter = express.Router();

productRouter.post("/seed", isAdmin, CreateAllProduts);
productRouter.get("/allProducts", isAdmin, GetAllProducts);
productRouter.get("/:id", isAdmin, GetProductByID);
productRouter.post("/", isAdmin, AdminCreateNewProduct);
productRouter.put("/:id", isAdmin, UpdateProductByID);
productRouter.delete("/:id", isAdmin, DeleteProductByID);

module.exports = productRouter;

