export interface Promotion {
  id: number;
  description: string;
  image: {
    url: string;
  };
  price: number;
  discount: number;
}
export interface IPopularPromotions {
  data: Promotion[];
}

export interface Category {
  id: number;
  title: string
  image: {
    url: string;
  };
}
export interface IPopularCategories {
  data: Category[];
}

export interface Product {
  id: number;
  description: string;
  image: {
    url: string;
  };
  price: number;
}
export interface IPopularProducts {
  data: Product[];
}

export interface Brand {
  id: number;
  image: {
    url: string;
  };
}
export interface IPopularBrands {
  data: Brand[];
}

export interface Comments {
  id: number;
  name: string;
  description: string;
  date: string;
  image: {
    url: string;
  };
}
export interface IComments {
  data: Comments[];
}
