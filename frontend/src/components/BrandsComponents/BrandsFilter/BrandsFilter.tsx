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
  const englishAlphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode("a".charCodeAt(0) + i).toUpperCase()
  );

  const russianAlphabet = Array.from({ length: 33 }, (_, i) =>
    String.fromCharCode("а".charCodeAt(0) + i).toUpperCase()
  );

  const allAlphabet = [...englishAlphabet, ...russianAlphabet];

  const [selectedLetter, setSelectedLetter] = useState<string>("");

  const filterByLetter = (letter: string) => {
    return data.filter((brand) =>
      brand.name.toLowerCase().startsWith(letter.toLowerCase())
    );
  };

  const isLetterUsed = (letter: string) => {
    return filterByLetter(letter).length > 0;
  };

  const handleLetterClick = (letter: string) => {
    setSelectedLetter(letter);
  };

  return (
    <div className={cn(styles.filter, "container")}>
      <div className={styles.filter__buttons}>
        <button
          className={styles.filter__btn}
          onClick={() => setSelectedLetter("")}
        >
          Все
        </button>
        {allAlphabet.map((letter) => (
          <button
            key={letter}
            className={cn(styles.filter__btn, {
              [styles.active]: selectedLetter === letter,
            })}
            onClick={() => handleLetterClick(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
      <ul className={styles.filter__list}>
        {selectedLetter !== "" &&
          filterByLetter(selectedLetter).length === 0 && (
            <li className={styles.filter__listItem}>
              <span className={styles.filter__error}>
                На данную букву нет брендов
              </span>
            </li>
          )}
        {allAlphabet.map((letter) => (
          <li className={styles.filter__listItem} key={letter}>
            {selectedLetter === "" || selectedLetter === letter ? (
              <>
                {isLetterUsed(letter) && <span>{letter}</span>}
                <div className="filter__listContent">
                  {filterByLetter(letter).map((brand) => (
                    <Link href={"#"} key={brand.id}>
                      {brand.name}
                    </Link>
                  ))}
                </div>
              </>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrandsFilter;
