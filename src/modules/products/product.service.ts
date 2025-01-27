import { TProduct } from "./product.interface"
import { Product } from "./product.model"



const createProduct = async(payload:TProduct) =>{
    const result = await Product.create(payload);
    return result
}

const getAllProductData = async()=>{
    const result = await Product.find();
    return result;
}


export const ProductServices = {
    createProduct,
    getAllProductData,

}