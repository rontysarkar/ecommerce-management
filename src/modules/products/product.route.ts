import express from "express";
import { ProductControllers } from "./product.controller";

const route = express.Router();

route.post("/", ProductControllers.createProduct);
route.get('/', ProductControllers.getAllProductData);

export const ProductRoutes = route;
