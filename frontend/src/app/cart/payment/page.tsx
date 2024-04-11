import styles from "../Payment.module.scss"
import Address from '@/components/PaymentComponents/Address/Address';
import Thancks from '@/components/PaymentComponents/Thanks/Thanks'
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
  title: "Корзина | Stroyka Store",
  description: "Здесь находятся товары, добавленные в корзину",
};
export default function PaymentPage() {
  return (
    <div className={styles.loser}>
      <Address />
    </div>
  )
}
