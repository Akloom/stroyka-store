import Location from "@/components/ContactsComponents/Location/Location";
import AboutCompany from "@/components/HomeComponents/AboutCompany/AboutCompany";
import BreadCrumps from "@/shared/BreadCrumps/BreadCrumps";

const ContactsPage = () => {
  return (
    <>
      <BreadCrumps path="Контакты" title="Контакты" />
      <Location />
      <AboutCompany />
    </>
  );
};

export default ContactsPage;
