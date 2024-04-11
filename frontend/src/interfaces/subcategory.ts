import {Meta, Published  } from "."

export interface Subcategory extends Published {
    id: number;
    title: string;
    products: Product[]
  }

export interface Product extends Published {
    id: number
    title: string;
    Price: number;
    Image: {
        url: string
    } 
} 
  export interface SubCategoryResponse {
      data: Subcategory[];
      meta: Meta
  }