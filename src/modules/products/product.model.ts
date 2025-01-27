import { model, Schema } from "mongoose";
import { ProductModel, TInventory, TProduct, TVariant } from "./product.interface";


const VariantSchema = new Schema<TVariant>({
    type: { type: String, required: true },
    value: { type: String, required: true },
  });
  
  const InventorySchema = new Schema<TInventory>({
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
  });

  const ProductSchema = new Schema<TProduct,ProductModel>(
    {
      name: { type: String, required: true },
      description: { type: String, required: true },
      price: { type: Number, required: true },
      category: { type: String, required: true },
      tags: { type: [String], required: true },
      variants: { type: [VariantSchema], required: false },
      inventory: { type: InventorySchema, required: true },
      slug:String,
    },
    { timestamps: true }
  );

  ProductSchema.static('createSlug', function createSlug(payload:TProduct) {
     const name = payload.name.replace(/\s+/g,"");
     const price = payload.price;
     const slug = `${name}-${price}`
     return slug
  });


  export const Product = model<TProduct,ProductModel>('Product',ProductSchema)
