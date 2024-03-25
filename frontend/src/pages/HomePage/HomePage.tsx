import BannerSlider from "@/components/HomeComponents/Banner/BannerSlider";
import Comments from "@/components/HomeComponents/Comments/Comments";
import PopularBrands from "@/components/HomeComponents/PopularBrands/PopularBrands";
import PopularCategories from "@/components/HomeComponents/PopularCategories/PopularCategories";
import PopularProducts from "@/components/HomeComponents/PopularProducts/PopularProducts";
import PopularPromotions from "@/components/HomeComponents/PopularPromotions/PopularPromotions";
import {
  IPopularBrands,
  IPopularCategories,
  IComments,
  IPopularProducts,
  IPopularPromotions,
} from "../../../interfaces/popular";
import AboutCompany from "@/components/HomeComponents/AboutCompany/AboutCompany";

interface HomePageProps {
  promotions: IPopularPromotions;
  categories: IPopularCategories;
  products: IPopularProducts;
  brands: IPopularBrands;
  comments: IComments;
}

const HomePage = ({
  promotions,
  categories,
  products,
  brands,
  comments,
}: HomePageProps) => {
  const promotionsData = promotions;
  const categoriesData = categories;
  const productsData = products;
  const brandsData = brands;
  const commentsData = comments;

  return (
    <>
      <BannerSlider />
      <PopularPromotions data={promotionsData.data} />
      <PopularCategories data={categoriesData.data} />
      <PopularProducts data={productsData.data} />
      <PopularBrands data={brandsData.data} />
      <Comments data={commentsData.data} />
      <AboutCompany />
    </>
  );
};

export default HomePage;
