import BannerSlider from "@/components/HomeComponents/Banner/BannerSlider";
import PopularCategories from "@/components/HomeComponents/PopularCategories/PopularCategories";
import HomeCategories from "@/components/HomeComponents/PopularCategories/PopularCategories";
import PopularProducts from "@/components/HomeComponents/PopularProducts/PopularProducts";
import PopularPromotions from "@/components/HomeComponents/PopularPromotions/PopularPromotions";
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

  const productsData = [
    {
      id: 1,
      description: `Керамогранит Yasmin 598х185 коричневый C-YA4M112D`,
      price: "899 ₽",
      image: "/img/home-product-1.png",
    },
    {
      id: 2,
      description: `Затирка для узких швов Ceresit СЕ 33, цвет белый, 2 кг`,
      price: "899 ₽",
      image: "/img/home-product-2.png",
    },
    {
      id: 3,
      description: `Грунтовка Старатели 10л глубокого проникновения`,
      price: "899 ₽",
      image: "/img/home-product-3.png",
    },
    {
      id: 4,
      description: `Гипсокартон Волма, 2500 х 1200 х 12,5 мм`,
      price: "899 ₽",
      image: "/img/home-product-4.png",
    },
    {
      id: 5,
      description: `Профиль 0,55мм для гипсокартона`,
      price: "899 ₽",
      image: "/img/home-product-5.png",
    },
    {
      id: 6,
      description: `Рулетка 3м`,
      price: "899 ₽",
      image: "/img/home-product-6.png",
    },
    {
      id: 7,
      description: `Кнауф Мп 75 штукатурка гипсовая МН 30кг`,
      price: "899 ₽",
      image: "/img/home-product-7.png",
    },
    {
      id: 8,
      description: `Уголок серый канализационный Д110 ГР90`,
      price: "899 ₽",
      image: "/img/home-product-8.png",
    },
    {
      id: 9,
      description: `Knauf Ротбанд, 30 кг`,
      price: "899 ₽",
      image: "/img/home-product-9.png",
    },
    {
      id: 10,
      description: `Саморез по металлу 3,5х25 мм для гипсокартона`,
      price: "899 ₽",
      image: "/img/home-product-10.png",
    },
    {
      id: 11,
      description: `Шпатлевка универсальная Danogips SuperFinish 17 л`,
      price: "899 ₽",
      image: "/img/home-product-11.png",
    },
    {
      id: 12,
      description: `Клейкая лента металлизированная Изоспан FL 5х5000 см`,
      price: "899 ₽",
      image: "/img/home-product-12.png",
    },
  ];

  return (
    <>
      <BannerSlider />
      <PopularPromotions data={promotionsData} />
      <PopularCategories data={categoriesData} />
      <PopularProducts data={productsData} />
    </>
  );
};

export default HomePage;
