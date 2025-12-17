import Link from "next/link";
import React from "react";
import { BsInfoCircle } from "react-icons/bs";
import { PRICE_DETAILS } from "./constants";

const PriceCard: React.FC = () => {
  return (
    <div className=" gradient-question price-card">
      <div className="flex flex-col gap-4">
        {PRICE_DETAILS.map((item) => (
          <div key={item.label} className="flex justify-between text-xs md:text-sm font-medium">
            <div className="flex items-center gap-2">
                <span>{item.label}</span>
               {
                !item.label.includes("price") && (
                     <BsInfoCircle size={10} />
                )
               }
            </div>
            <span>{item.value}</span>
          </div>
        ))}

        <div className="ml-1 flex gap-1.5 text-xs md:text-sm font-medium">
             <BsInfoCircle size={10} className="mt-1.5" />
          <p className="max-w-64">
             Need help to understand the details?
              <Link href="#">
              Learn more
            </Link>
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
