import ReturnPage from "@/pages/ReturnPage/ReturnPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Возврат | Stroyka Store",
  description: "Возврат ненадлежащего товара",
};

export default function Return() {
  return (
    <div>
      <ReturnPage />
    </div>
  );
}
