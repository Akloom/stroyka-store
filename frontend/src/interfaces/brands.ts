interface StrapiResponse<T> {
  data: T;
  meta: any
}

export type IBrandsResponse = StrapiResponse<IBrands[]>

export interface IBrands {
  id: number;
  name: string;
  owner: string;
  info: string;
}