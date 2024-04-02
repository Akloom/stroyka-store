"use client";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/Icons/Icons";
import styles from "./Comments.module.scss";
import cn from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Navigation } from "swiper/modules";
import Image from "next/image";

interface Comments {
  id: number;
  name: string;
  description: string;
  date: string;
  image: {
    url: string;
  };
}

interface CommentsProps {
  data: Comments[];
}

const Comments = ({ data }: CommentsProps) => {
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.offsetLeft);
      if (typeof window !== "undefined") {
        const resizeWindow = () => {
          if (containerRef.current) {
            setWidth(containerRef.current.offsetLeft);
          }
        };

        window.addEventListener("resize", resizeWindow);

        return () => window.removeEventListener("resize", resizeWindow);
      }
    }
  }, []);

  return (
    <section className={styles.comments}>
      <div
        ref={containerRef}
        className={cn(styles.comments__content, "container")}
      >
        <div className={styles.comments__heading}>
          <h1 className={styles.comments__title}>Отзывы</h1>
          <div className={styles.comments__buttons}>
            <div className="comments__btn-prev">
              <button className={styles.comments__btn}>
                <ArrowLeftIcon />
              </button>
            </div>
            <div className="comments__btn-next">
              <button className={styles.comments__btn}>
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        </div>
        <div
          className={styles.comments__slider}
          style={width ? { width: `calc(100vw - ${width}px)` } : {}}
        >
          <Swiper
            freeMode={true}
            navigation={{
              nextEl: ".comments__btn-next",
              prevEl: ".comments__btn-prev",
            }}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Navigation]}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
              },

              700: {
                slidesPerView: 2,
                spaceBetween: 16,
              },

              850: {
                slidesPerView: 2.5,
                spaceBetween: 16,
              },

              960: {
                slidesPerView: 3,
                spaceBetween: 16,
              },

              1350: {
                slidesPerView: 3.5,
                spaceBetween: 16,
              },
            }}
            className={styles.mySwiper}
          >
            {data.map((itemData) => {
              return (
                <SwiperSlide key={itemData.id}>
                  <div className={styles.comments__card}>
                    <header className={styles.comments__cardHeading}>
                      <div className={styles.comments__cardAuthor}>
                        <Image
                          src={`${itemData.image.url}`}
                          alt=""
                          width={52}
                          height={52}
                          className={styles.comments__cardImage}
                        />
                        <span className={styles.comments__cardTitle}>
                          {itemData.name}
                        </span>
                      </div>
                      <div className={styles.comments__decore}>
                        <Image
                          src={"/img/comments-decore.svg"}
                          alt={"image"}
                          width={32}
                          height={24}
                        ></Image>
                      </div>
                    </header>
                    <div className={styles.comments__cardContent}>
                      <p className={styles.comments__cardDesc}>
                        {itemData.description}
                      </p>
                      <span className={styles.comments__cardDate}>
                        {itemData.date}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Comments;
