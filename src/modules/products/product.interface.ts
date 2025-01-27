/* eslint-disable no-unused-vars */
import { Model } from "mongoose";

export type TVariant = {
    type: string;
    value: string;
  };
  
  export type TInventory = {
    quantity: number;
    inStock: boolean;
  };
  
  export type TProduct = {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    variants: [TVariant];
    inventory: TInventory;
    slug:string
  };

  export interface ProductModel extends Model<TProduct> {
    createSlug(payload:TProduct): number;
  }

  