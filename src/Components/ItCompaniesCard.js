import React, { useState } from 'react';

const ItCompaniesCard = ({companyLogo}) => {
    const [isHovering, setIsHovering] = useState(false);
    return (
        <div
          className="bg-white rounded-lg shadow-md p-4 transition duration-300 transform hover:-translate-y-2 hover:shadow-lg relative flex justify-center items-center"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <img src={companyLogo} alt="" />
          {isHovering && (
            <div className="absolute bg-blue-500 bg-opacity-50  top-0 right-0 left-0 bottom-0 flex justify-center items-center">
              <button className="font-semibold hover:bg-green-500 bg-sky-500 text-white px-5 py-3 rounded-sm">
                View Details
              </button>
            </div>
          )}
        </div>
    );
};

export default ItCompaniesCard;