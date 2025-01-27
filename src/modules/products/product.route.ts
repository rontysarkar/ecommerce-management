import express from "express";
import { ProductControllers } from "./product.controller";

const route = express.Router();

route.post("/", ProductControllers.createProduct);
route.get('/', ProductControllers.getAllProductData);
route.get('/:slug', ProductControllers.getProductBySlug);
route.put('/:productId',ProductControllers.updateProductDataById)

export const ProductRoutes = route;
