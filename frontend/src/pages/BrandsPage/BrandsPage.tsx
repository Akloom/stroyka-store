import BrandsFilter from "@/components/BrandsComponents/BrandsFilter/BrandsFilter";
import PopularBrands from "@/components/HomeComponents/PopularBrands/PopularBrands";
import { IBrands } from "@/interfaces/brands";
import { IPopularBrands } from "@/interfaces/popular";
import BreadCrumps from "@/shared/BreadCrumps/BreadCrumps";

interface BrandsPageProps {
  popularBrands: IPopularBrands;
  brands: IBrands[];
}

const BrandsPage = ({ popularBrands, brands }: BrandsPageProps) => {
  return (
    <>
      <BreadCrumps
        path="Все продавцы"
        title="Все бренды"
        image="/img/brands-bc.png"
      />
      <PopularBrands data={popularBrands.data} />
      <BrandsFilter data={brands} />
    </>
  );
};

export default BrandsPage;
