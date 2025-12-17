import Image from "next/image";
import { DETAILS, tabs } from "./constants";



const PropertyDetails = () => {

  return (
    <section className="w-full">

      <div className="relative max-w-fit w-full">
        <div className="flex gap-4 md:gap-10 px-2 md:px-6 xl:px-8 text-xs md:text-sm font-medium">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`relative pb-1.5 md:pb-2 text-foreground-secondary`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="h-0.5 w-full" style={{background: 'linear-gradient(to right, #932A8E, #3A5DAC)'}} />
      </div>


      <h1 className="text-sm md:text-base font-semibold text-foreground-secondary mt-2 mb-1">
        Two Bedroom Apartment in Executive Residences 1
      </h1>


      <div className="flex flex-wrap items-center gap-3 md:gap-8 text-xs md:text-sm text-slate-600">
    {DETAILS.map(({ Icon, title, color }) => (
          <div key={title} className="flex items-center gap-2">
            
            {Icon && (
              <Image
                src={Icon}
                alt={title}
                width={20}
                height={20}
              />
            )}
            <span
              className={`font-bold ${color ? color : "text-foreground-secondary font-semibold"}`}
            >
              {title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyDetails;
