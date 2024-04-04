import ProductComponent from "@/components/ProductComponents/Product/Product";
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
export default async function Product( {params: {id}}: ProductType) {
  const ProductComponents = await fatchProductPageList(+id)
  console.log(ProductComponents);
  
  return (
  <div>
    <ProductComponent productinfo={ProductComponents.data}/>
  </div>
  )
  
}
