import Documentation from "@/components/DocumentationComponent/Documentation";
import { IDocs } from "@/interfaces/docs";

interface DocumentationPageProps {
  data: IDocs[];
}

const DocumentationPage = ({ data }: DocumentationPageProps) => {
  return (
    <>
      <Documentation data={data} />
    </>
  );
};

export default DocumentationPage;
