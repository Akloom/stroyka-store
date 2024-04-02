import BrandsPage from "@/pages/BrandsPage/BrandsPage";
import { getBrandsList } from "@/utils/api/reqBrands";
import { getBrands } from "@/utils/api/reqPopular";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Бренды | Stroyka Store",
  description: "Ознакомьтесь с брендами, с которыми мы сотрудничаем",
};

export default async function Brands() {
  const popularBrands = await getBrands();
  const brands = await getBrandsList();

  return (
    <>
      <BrandsPage popularBrands={popularBrands} brands={brands.data} />
    </>
  );
}
