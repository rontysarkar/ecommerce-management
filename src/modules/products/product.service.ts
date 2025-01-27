import { TProduct } from "./product.interface"
import { Product } from "./product.model"
import {ObjectId} from "mongodb"



const createProduct = async(payload:TProduct) =>{
    const slug = Product.createSlug(payload)
    payload.slug = String(slug)
    const result = await Product.create(payload);
    return result
}

const getAllProductData = async()=>{
    const result = await Product.find();
    return result;
}

const getProductBySlug = async(payload : string)=>{
    const result = await Product.findOne({slug:payload})
    return result
}

const updateProductDataById = async(id:string,updateData:TProduct) =>{
    const result = await Product.updateOne({_id:new ObjectId(id)},updateData)
    return result
}


export const ProductServices = {
    createProduct,
    getAllProductData,
    getProductBySlug,
    updateProductDataById,

}