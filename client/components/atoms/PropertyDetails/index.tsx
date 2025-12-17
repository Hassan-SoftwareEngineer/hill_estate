import Image from "next/image";
import { DETAILS, tabs } from "./constants";



const PropertyDetails = () => {
  const activeIndex = 0;

  return (
    <section className="w-full">

      <div className="relative border-b-2 border-border-accent max-w-fit w-full">
        <div className="flex gap-10 px-4 md:px-6 xl:px-8 text-sm font-medium">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              className={`relative pb-2 text-foreground-secondary`}
            >
              {tab}

              {index === activeIndex && (
                <span className="absolute left-0 -bottom-0.5 h-0.5 w-full" style={{background: 'linear-gradient(to right, #932A8E, #3A5DAC)'}} />
              )}
            </button>
          ))}
        </div>
      </div>


      <h1 className="mt-4 font-semibold text-foreground-secondary">
        Two Bedroom Apartment in Executive Residences 1
      </h1>


      <div className="mt-3 flex flex-wrap items-center gap-8 text-sm text-slate-600">
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
