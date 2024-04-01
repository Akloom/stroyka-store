import Documentation from "@/components/DocumentationComponent/Documentation";
import { IDocs } from "@/interfaces/docs";
import BreadCrumps from "@/shared/BreadCrumps/BreadCrumps";

interface DocumentationPageProps {
  data: IDocs[];
}

const DocumentationPage = ({ data }: DocumentationPageProps) => {
  return (
    <>
      <BreadCrumps path="Документация" title="Документация" />
      <Documentation data={data} />
    </>
  );
};

export default DocumentationPage;
