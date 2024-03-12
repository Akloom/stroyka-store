import BannerSlider from "@/components/HomeComponents/Banner/BannerSlider";
import Comments from "@/components/HomeComponents/Comments/Comments";
import PopularBrands from "@/components/HomeComponents/PopularBrands/PopularBrands";
import PopularCategories from "@/components/HomeComponents/PopularCategories/PopularCategories";
import PopularProducts from "@/components/HomeComponents/PopularProducts/PopularProducts";
import PopularPromotions from "@/components/HomeComponents/PopularPromotions/PopularPromotions";

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

  const brandsData = [
    {
      id: 1,
      image: "/img/home-brands-1.png",
    },
    {
      id: 2,
      image: "/img/home-brands-2.png",
    },
    {
      id: 3,
      image: "/img/home-brands-3.png",
    },
    {
      id: 4,
      image: "/img/home-brands-4.png",
    },
    {
      id: 5,
      image: "/img/home-brands-5.png",
    },
    {
      id: 6,
      image: "/img/home-brands-6.png",
    },
    {
      id: 7,
      image: "/img/home-brands-7.png",
    },
    {
      id: 8,
      image: "/img/home-brands-8.png",
    },
    {
      id: 9,
      image: "/img/home-brands-9.png",
    },
    {
      id: 10,
      image: "/img/home-brands-10.png",
    },
    {
      id: 11,
      image: "/img/home-brands-11.png",
    },
    {
      id: 12,
      image: "/img/home-brands-12.png",
    },
  ];

  const commentsData = [
    {
      id: 1,
      name: "Петр",
      description: `Сегодня 10.03.2022 года, брал перфоратор в аренду в магазине по улице Дорожная. Продавец всё хорошо объяснил, показал и плюс остался бонус в ящике перфоратора это бур нужного мне диаметра, оставленным прежним арендатором. В общем повесил телевизор, где надо было просверлить 4 отверстия, всего за 100 ₽`,
      date: "21 марта 2022 г.",
      image: "/img/comments-avatar.svg",
    },
    {
      id: 2,
      name: "Анна",
      description: `Живу в п.Володарский МО, очень были рады открытию магазина СтройкаСтор. Хорошие сотрудники, но особенно хочется отметить работу Алексея за его помощь в решении проблем, очень квалифицированные рекомендации по подбору строительных материалов для ремонта. Хороший ассортимент`,
      date: "18 марта 2022 г.",
      image: "/img/comments-avatar.svg",
    },
    {
      id: 3,
      name: "Виктор",
      description: `Заказывал в данном магазине строй материалы. Привезли их вовремя и в прекрасном состоянии, претензий к доставке, персоналу и прочему меня нет. Строй материалы мне понравились, ремонт с ними я сделал отличный. Магазин мне безумно понравился, обязательно обращусь сюда снова, большое спасибо`,
      date: "6 ноября 2021 г.",
      image: "/img/comments-avatar.svg",
    },
    {
      id: 4,
      name: "Дмитрий",
      description: `Данный магазин целиком и полностью оправдал все мои ожидания. Тут мне удалось найти апсалютно все нужные мне материалы для отделочных работ и в нужном количестве. С доставкой тоже получилось всё удобно. привезли всё в заказанном количестве и в отличном состоянии.`,
      date: "5 ноября 2021 г.",
      image: "/img/comments-avatar.svg",
    },
    {
      id: 5,
      name: "Александр",
      description: `Данный магазин целиком и полностью оправдал все мои ожидания. Тут мне удалось найти апсалютно все нужные мне материалы для отделочных работ и в нужном количестве. С доставкой тоже получилось всё удобно. привезли всё в заказанном количестве и в отличном состоянии.`,
      date: "5 ноября 2021 г.",
      image: "/img/comments-avatar.svg",
    },
    {
      id: 6,
      name: "Илья",
      description: `Данный магазин целиком и полностью оправдал все мои ожидания. Тут мне удалось найти апсалютно все нужные мне материалы для отделочных работ и в нужном количестве. С доставкой тоже получилось всё удобно. привезли всё в заказанном количестве и в отличном состоянии.`,
      date: "5 ноября 2021 г.",
      image: "/img/comments-avatar.svg",
    },
    {
      id: 7,
      name: "Абдульазиз",
      description: `Данный магазин целиком и полностью оправдал все мои ожидания. Тут мне удалось найти апсалютно все нужные мне материалы для отделочных работ и в нужном количестве. С доставкой тоже получилось всё удобно. привезли всё в заказанном количестве и в отличном состоянии.`,
      date: "5 ноября 2021 г.",
      image: "/img/comments-avatar.svg",
    },
  ];

  return (
    <>
      <BannerSlider />
      <PopularPromotions data={promotionsData} />
      <PopularCategories data={categoriesData} />
      <PopularProducts data={productsData} />
      <PopularBrands data={brandsData} />
      <Comments data={commentsData} />
    </>
  );
};

export default HomePage;
