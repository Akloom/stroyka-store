import Faq from "@/components/DeliveryComponents/Faq/Faq";
import Steps from "@/components/DeliveryComponents/Steps/Steps";
import { IFaq } from "@/interfaces/faq";

interface DeliveryPageProps {
  faqData: IFaq[];
}

const DeliveryPage = ({ faqData }: DeliveryPageProps) => {
  return (
    <>
      <Steps />
      <Faq data={faqData} />
    </>
  );
};

export default DeliveryPage;
