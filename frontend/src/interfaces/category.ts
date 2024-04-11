import { Meta, Published} from '.';

import { Subcategory } from './subcategory';

export interface Category extends Published{
    id: number;
    title: string;
    image: {
        url: string;
      };
      subcategories: Subcategory[]
}
export interface CategoriesResponse {
    data: Category[];
    meta: Meta
}   
export interface CardCategory extends Published {
    id: number;
    title: string
    price: number
    image: {
      url: string;
    };
    subcategories: Subcategory[]
  }
  export interface CardCategoryResponse {
    data: Subcategory;
    meta: Meta
} 