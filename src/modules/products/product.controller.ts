import { Request, Response } from "express";
import { ProductServices } from "./product.service";


const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const result = await ProductServices.createProduct(productData);
    res.json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllProductData = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductData();
    res.json({
      success: true,
      message: "Product fetched Successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getProductBySlug = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;
    const result = await ProductServices.getProductBySlug(slug);
    res.json({
      success: true,
      message: "Product get successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateProductDataById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const productData = req.body;
    const result = await ProductServices.updateProductDataById(
      productId,
      productData
    );

    res.json({
      success: true,
      message: "update data successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const ProductControllers = {
  createProduct,
  getAllProductData,
  getProductBySlug,
  updateProductDataById,
};
