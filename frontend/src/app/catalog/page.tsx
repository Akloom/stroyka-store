
import List from "@/components/CartComponents/List/List";
import Banner from "@/components/CatalogPage/Banner/Banner";
import BrandsShop from "@/components/CatalogPage/Brands/Brands";
import CardShop from "@/components/CatalogPage/Card/Card";
import { fatchtBrandsList } from "@/utils/api/reqPopular";
import { fatchCategoryCardList } from "@/utils/api/reqPopular"
import { Metadata } from "next";

export const revalidate = 10
export const metadata: Metadata = {
  title: "Каталог | Stroyka Store",
  description: "Каталог наших товаров",
};

export default async function Catalog() {

  const brandsList = await fatchtBrandsList()
  const categoryCardList = await fatchCategoryCardList()
  // const subcategoryList = await fatchSubCategoryCardList()
  return (
    <div>

    <Banner />
    <BrandsShop list={brandsList.data}/>
    <CardShop list={categoryCardList.data} />
  </div>
  );
}
