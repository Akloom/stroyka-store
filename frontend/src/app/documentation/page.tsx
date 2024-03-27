import DocumentationPage from "@/pages/DocumentationPage/DocumentationPage";
import { getDocs } from "@/utils/api/reqDocs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Документация | Stroyka Store",
  description: "Наша документация",
};

export default async function Documentation() {
  const data = await getDocs();

  return (
    <div>
      <DocumentationPage data={data.data} />
    </div>
  );
}
