import BannerSlider from "@/components/HomeComponents/Banner/BannerSlider";
import HomePromotions from "@/components/HomeComponents/HomePromotions/HomePromotions";

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

  return (
    <>
      <BannerSlider />
      <HomePromotions data={promotionsData} />
    </>
  );
};

export default HomePage;
