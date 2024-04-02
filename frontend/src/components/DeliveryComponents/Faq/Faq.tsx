"use client";
import { ArrowBottomIcon } from "@/components/Icons/Icons";
import styles from "./Faq.module.scss";
import cn from "clsx";
import { IFaq } from "@/interfaces/faq";
import { useState } from "react";

interface FaqProps {
  data: IFaq[];
}

const Faq = ({ data }: FaqProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleActive = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={cn(styles.faq, "container")}>
      <div className={styles.faq__content}>
        <h1 className={styles.faq__title}>Часто задаваемые вопросы</h1>
        <ul className={styles.faq__list}>
          {data.map((item, index) => {
            return (
              <li className={styles.faq__listItem} key={item.id}>
                <div
                  onClick={() => toggleActive(index)}
                  className={cn(styles.faq__listQuestion, {
                    [styles.active]: activeIndex === index,
                  })}
                >
                  <h2 className={styles.faq__listTitle}>{item.question}</h2>
                  <ArrowBottomIcon />
                </div>
                <div
                  className={cn(styles.faq__listAnswer, {
                    [styles.active]: activeIndex === index,
                  })}
                >
                  <p className={styles.faq__listDesc}>{item.answer}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
