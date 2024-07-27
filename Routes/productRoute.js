const express = require('express');
const { isAdmin, isAuthorized } = require('../utils');
const { CreateAllProduts, GetAllProducts, GetProductByID, AdminCreateNewProduct, UpdateProductByID, DeleteProductByID } = require("../Controllers/productController");

const productRouter = express.Router();

productRouter.get("/seed", CreateAllProduts);
productRouter.get("/allProducts", GetAllProducts);
// productRouter.get("/:id", GetProductByID);
// productRouter.post("/", isAuthorized, isAdmin, AdminCreateNewProduct);
productRouter.put("/:id", isAuthorized, isAdmin, UpdateProductByID);
productRouter.delete("/:id", isAuthorized, isAdmin, DeleteProductByID);

module.exports = productRouter;

