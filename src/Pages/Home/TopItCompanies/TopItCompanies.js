import { useEffect, useState } from "react";
import ItCompaniesCard from "../../../Components/ItCompaniesCard";

const TopItCompanies = () => {
  const [itCompanies, setItCompanies] = useState([]);
  useEffect(() => {
    fetch("https://find-work-server.vercel.app/companies")
      .then((res) => res.json())
      .then((data) => setItCompanies(data));
  }, []);
  return (
    <div className="mx-auto my-20 grid grid-cols-1 items-center">
      <h1 className="font-bold text-4xl text-sky-500 mb-10">
        Top IT Companies
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {itCompanies && itCompanies.slice(0, 3).map((company) => (
          <ItCompaniesCard
            companyLogo={company.logo}
            key={company._id}
          ></ItCompaniesCard>
        ))}
      </div>
    </div>
  );
};

export default TopItCompanies;
