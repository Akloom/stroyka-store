
import PopularProductsCard from "@/components/HomeComponents/PopularProducts/PopularProductsCard/PopularProductsCard";
import ProductComponent from "@/components/ProductComponents/Product/Product";
import Modal from "@/shared/Modal/Modal";
import { getProducts } from "@/utils/api/reqPopular";
import { fatchProductPageList } from "@/utils/api/reqProduct";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Товар | Stroyka Store",
  description: "Страница с информацией о товаре",
};
interface ProductType {
  params: {
    id: string;
  }
}
export const revalidate = 10;

export default async function Product( {params: {id}}: ProductType) {
  const ProductComponents = await fatchProductPageList(+id)
  const IpopularProduct = await getProducts()
  console.log(ProductComponents);
  console.log(IpopularProduct)
  
  return (
  <div>
    <ProductComponent productinfo={ProductComponents.data}/>
  </div>
  )
  
}
