

import ProfilePage from "@/pages/ProfilePage/ProfilePage/ProfilePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Личный кабинет | Stroyka Store",
  description: "Ваш личный кабинет",
};

export default function Profile() {
  return (
    <>
      <ProfilePage />
    </>
  );
}