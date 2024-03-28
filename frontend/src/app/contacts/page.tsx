import ContactsPage from "@/pages/ContactsPage/ContactsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты | Stroyka Store",
  description: "Свяжитесь с нами по данным контактам",
};

export default function Contacts() {
  return (
    <>
      <ContactsPage />
    </>
  );
}
