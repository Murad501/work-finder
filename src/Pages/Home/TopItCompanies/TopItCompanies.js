import companyOne from "../../../Assets/company logo/a.png";
import companyTwo from "../../../Assets/company logo/apple-logo.png";
import companyThree from "../../../Assets/company logo/audit.png";
import ItCompaniesCard from "../../../Components/ItCompaniesCard";

const TopItCompanies = () => {
  return (
    <div className="mx-auto my-20 grid grid-cols-1 items-center">
      <h1 className="font-bold text-4xl text-sky-500 mb-10">
        Top IT Companies
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <ItCompaniesCard companyLogo={companyOne}></ItCompaniesCard>
        <ItCompaniesCard companyLogo={companyTwo}></ItCompaniesCard>
        <ItCompaniesCard companyLogo={companyThree}></ItCompaniesCard>
      </div>
    </div>
  );
};

export default TopItCompanies;
