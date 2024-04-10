"use client"
import { useState } from 'react';
import styles from "./NotProductBasket.module.scss"

export default function NotProductBasket({}) {
  const [displayText, setDisplayText] = useState(true);

  const handleButtonClick = () => {
    // Логика для обработки нажатия на кнопку
    setDisplayText(false); // Устанавливаем состояние, чтобы скрыть текст
  };

  return (
    <div>
      {displayText && <p className={styles.notProduct}>Корзина пуста , пожалуйста добавьте товар в корзину</p>}
    </div>
  );
}
