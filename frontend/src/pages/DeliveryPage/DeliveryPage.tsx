import Faq from "@/components/DeliveryComponents/Faq/Faq";
import Steps from "@/components/DeliveryComponents/Steps/Steps";
import { IFaq } from "@/interfaces/faq";
import BreadCrumps from "@/shared/BreadCrumps/BreadCrumps";

interface DeliveryPageProps {
  faqData: IFaq[];
}

const DeliveryPage = ({ faqData }: DeliveryPageProps) => {
  return (
    <>
      <BreadCrumps
        path="Доставка"
        title="Доставка"
        desc="Доставка осуществляется курьерами поставщика или службой курьеров Достависта. Также товар можно забрать самостоятельно от поставщика"
        image="/img/delivery-bc.png"
      />
      <Steps />
      <Faq data={faqData} />
    </>
  );
};

export default DeliveryPage;
