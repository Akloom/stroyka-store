import Thancks from '@/components/PaymentComponents/Thanks/Thanks'
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
  title: "Спасибо до свидания | Stroyka Store",
  description: "спасибо 404",
};
export default function PaymentPage() {
  return (
    <div>
   <Thancks />
    </div>
  )
}
