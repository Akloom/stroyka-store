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