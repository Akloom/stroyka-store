import { Meta, Published } from ".";

export interface Brand extends Published {
  id: number;
  title: string;
 
}

export interface BrandsResponse {
    data: Brand[];
    meta: Meta
}
export interface BrandSidebar extends Published {
  id: number;
  title: string;
 
}

export interface SidebarBrandsResponse {
    data: Brand[];
    meta: Meta
}
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