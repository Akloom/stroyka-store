import BannerSlider from "@/components/HomeComponents/Banner/BannerSlider";
import HomeCategories from "@/components/HomeComponents/PopularCategories/PopularCategories";
import HomePromotions from "@/components/HomeComponents/PopularPromotions/PopularPromotions";

const HomePage = () => {
  const promotionsData = [
    {
      id: 1,
      description: `Рубероид РКП-350 ТУ, размер материала 1 х 10 м (10м2, 1 рулон)`,
      oldPrice: "499 ₽",
      newPrice: "449 ₽",
      discount: "25%",
      image: "/img/home-promotions-1.png",
    },
    {
      id: 2,
      description: `Пена монтажная ТЕХНОНИКОЛЬ MASTER 65 профессиональная всесезонная`,
      oldPrice: "499 ₽",
      newPrice: "449 ₽",
      discount: "25%",
      image: "/img/home-promotions-2.png",
    },
    {
      id: 3,
      description: `Сетка "Рабица" яч. 50х50/1,5х10 м-ОЦ`,
      oldPrice: "499 ₽",
      newPrice: "449 ₽",
      discount: "25%",
      image: "/img/home-promotions-3.png",
    },
    {
      id: 4,
      description: `Металлочерепица, цвет коричневый, 1.18 х 1.15 м`,
      oldPrice: "499 ₽",
      newPrice: "449 ₽",
      discount: "25%",
      image: "/img/home-promotions-4.png",
    },
  ];

  const categoriesData = [
    {
      id: 1,
      title: "Душевые",
      image: "/img/home-categories-1.png",
    },
    {
      id: 2,
      title: "Пиломатериалы",
      image: "/img/home-categories-2.png",
    },
    {
      id: 3,
      title: "Линолеум",
      image: "/img/home-categories-3.png",
    },
    {
      id: 4,
      title: "Обои",
      image: "/img/home-categories-4.png",
    },
    {
      id: 5,
      title: "Инструменты",
      image: "/img/home-categories-5.png",
    },
    {
      id: 6,
      title: "Товары для дачи",
      image: "/img/home-categories-6.png",
    },
    {
      id: 7,
      title: "Окна",
      image: "/img/home-categories-7.png",
    },
    {
      id: 8,
      title: "Двери",
      image: "/img/home-categories-8.png",
    },
    {
      id: 9,
      title: "Сантехника",
      image: "/img/home-categories-9.png",
    },
    {
      id: 10,
      title: "Краски",
      image: "/img/home-categories-10.png",
    },
    {
      id: 11,
      title: "Электротовары",
      image: "/img/home-categories-11.png",
    },
    {
      id: 12,
      title: "Интерьер",
      image: "/img/home-categories-12.png",
    },
  ];

  return (
    <>
      <BannerSlider />
      <HomePromotions data={promotionsData} />
      <HomeCategories data={categoriesData} />
    </>
  );
};

export default HomePage;
