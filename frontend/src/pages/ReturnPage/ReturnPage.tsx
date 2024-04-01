import ReturnInfo from "@/components/ReturnComponent/ReturnInfo";
import BreadCrumps from "@/shared/BreadCrumps/BreadCrumps";

const ReturnPage = () => {
  return (
    <>
      <BreadCrumps
        path="Возврат"
        title="Возврат"
        desc="Ошиблись при выборе товара? Передумали? Ничего страшного! СтройкаСтор в течение 7 дней готова принять обратно или обменять Ваш товар"
        image="/img/return-bc.png"
      />
      <ReturnInfo />
    </>
  );
};

export default ReturnPage;
