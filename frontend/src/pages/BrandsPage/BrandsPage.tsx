import BrandsFilter from "@/components/BrandsComponents/BrandsFilter/BrandsFilter";
import PopularBrands from "@/components/HomeComponents/PopularBrands/PopularBrands";
import { IBrands } from "@/interfaces/brands";
import { IPopularBrands } from "@/interfaces/popular";

interface BrandsPageProps {
  popularBrands: IPopularBrands;
  brands: IBrands[];
}

const BrandsPage = ({ popularBrands, brands }: BrandsPageProps) => {
  return (
    <>
      <PopularBrands data={popularBrands.data} />
      <BrandsFilter data={brands} />
    </>
  );
};

export default BrandsPage;
