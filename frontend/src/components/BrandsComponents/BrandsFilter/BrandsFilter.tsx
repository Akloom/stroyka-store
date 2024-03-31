"use client";
import { useState } from "react";
import { IBrands } from "@/interfaces/brands";
import styles from "./BrandsFilter.module.scss";
import cn from "clsx";
import Link from "next/link";

interface BrandsFilterProps {
  data: IBrands[];
}

const BrandsFilter = ({ data }: BrandsFilterProps) => {
  const [selectedLetter, setSelectedLetter] = useState<string>("");

  const englishAlphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode("a".charCodeAt(0) + i).toUpperCase()
  );

  const russianAlphabet = Array.from({ length: 33 }, (_, i) =>
    String.fromCharCode("а".charCodeAt(0) + i).toUpperCase()
  );

  const allAlphabet = [...englishAlphabet, ...russianAlphabet];

  const filterByLetter = (letter: string) => {
    return data.filter((brand) =>
      brand.name.toLowerCase().startsWith(letter.toLowerCase())
    );
  };

  const isLetterUsed = (letter: string) => {
    return filterByLetter(letter).some((brand) => !!brand.name);
  };

  const handleLetterClick = (letter: string) => {
    setSelectedLetter(letter);
  };

  return (
    <div className={cn(styles.filter, "container")}>
      <div className={styles.filter__buttons}>
        <div className={styles.filter__buttonsEng}>
          <button
            className={cn(styles.filter__btnAll, {
              [styles.active]: selectedLetter === "",
            })}
            onClick={() => setSelectedLetter("")}
          >
            Все
          </button>
          {englishAlphabet.map((letter) =>
            isLetterUsed(letter) ? (
              <button
                key={letter}
                className={cn(styles.filter__btn, {
                  [styles.active]: selectedLetter === letter,
                })}
                onClick={() => handleLetterClick(letter)}
              >
                {letter}
              </button>
            ) : null
          )}
        </div>
        <div className={styles.filter__buttonsRus}>
          {russianAlphabet.map((letter) =>
            isLetterUsed(letter) ? (
              <button
                key={letter}
                className={cn(styles.filter__btn, {
                  [styles.active]: selectedLetter === letter,
                })}
                onClick={() => handleLetterClick(letter)}
              >
                {letter}
              </button>
            ) : null
          )}
        </div>
      </div>
      <ul className={styles.filter__list}>
        {(selectedLetter === "" ? allAlphabet : [selectedLetter]).map(
          (letter) =>
            isLetterUsed(letter) ? (
              <li className={styles.filter__listItem} key={letter}>
                <span className={styles.filter__listLetter}>{letter}</span>
                <div className={styles.filter__listContent}>
                  {filterByLetter(letter).map((brand) =>
                    !!brand.name ? (
                      <div className={styles.filter__listLink} key={brand.id}>
                        <Link href={"#"}>{brand.name}</Link>
                      </div>
                    ) : null
                  )}
                </div>
              </li>
            ) : null
        )}
      </ul>
    </div>
  );
};

export default BrandsFilter;
