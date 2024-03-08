"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Keyboard, Mousewheel, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./BannerSlider.module.scss";
import { ArrowLeftIcon, ArrowRightIcon } from "../Icons/Icons";

const BannerSlider = () => {
  return (
    <div className={styles.banner}>
      <Swiper
        cssMode={true}
        navigation={{
          nextEl: ".swiper__btn-next",
          prevEl: ".swiper__btn-prev",
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        className={styles.banner__swiper}
      >
        <SwiperSlide>
          <div className={styles.banner__item}>
            <Image
              className={styles.banner__image}
              src="/img/banner-image-1.png"
              alt="banner slider image"
              width={1360}
              height={420}
            />
            <div className={styles.banner__content}>
              <div className={styles.banner__info}>
                <h1 className={styles.banner__title}>
                  Специальные предложения
                </h1>
                <p className={styles.banner__desc}>
                  на строительные материалы и товары для ремонта
                </p>
              </div>
              <button className={styles.banner__button}>Подробнее</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.banner__item}>
            <Image
              className={styles.banner__image}
              src="/img/banner-image-1.png"
              alt="banner slider image"
              width={1360}
              height={420}
            />
            <div className={styles.banner__content}>
              <div className={styles.banner__info}>
                <h1 className={styles.banner__title}>
                  Специальные предложения
                </h1>
                <p className={styles.banner__desc}>
                  на строительные материалы и товары для ремонта
                </p>
              </div>
              <button className={styles.banner__button}>Подробнее</button>
            </div>
          </div>
        </SwiperSlide>
        <div className={styles.banner__buttons}>
          <div className="swiper__btn-prev">
            <button className={styles.banner__btn}>
              <ArrowLeftIcon />
            </button>
          </div>
          <div className="swiper__btn-next">
            <button className={styles.banner__btn}>
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
