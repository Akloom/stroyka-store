import CategoryCardShop from "@/components/CategoryComponents/Card/CategoryCard";
import CategoryLinks from "@/components/CategoryComponents/Links/Links";
import SidebarCategory from "@/components/CategoryComponents/Sidebar/Sidebar";
import {
  fatchBrandSidebarList,
  fatchCategoryPageList,
} from "@/utils/api/reqPopular";
import { Metadata } from "next";
import styles from "./Aside.module.scss";

export const metadata: Metadata = {
  title: "Категория | Stroyka Store",
  description: "Страница с категориями товара",
};
export const revalidate = 10;

interface RequestType {
  params: {
    id: string;
  };
}

export default async function Category({ params: { id } }: RequestType) {
  const cardShopCategory = await fatchCategoryPageList(+id);
  const SidebarBrand = await fatchBrandSidebarList();
  return (
    <div>    
      <div className={styles.parent}>
        <SidebarCategory list={SidebarBrand.data} />
        <main className={styles.main}>
          <CategoryLinks />
          <CategoryCardShop list={cardShopCategory.data.products} />
        </main>
      </div>
    </div>
  );
}
