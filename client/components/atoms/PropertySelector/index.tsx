"use client";
import { handshake } from "@/assets/icons";
import { Slider } from "@/components/ui/slider";
import Image from "next/image";
import { PropertySelectorProps } from "./types";


export default function PropertySelector({ area, setArea, pricePerSqft }: PropertySelectorProps) {

  const sliderGradient = {
    background: `linear-gradient(to right, #932A8E 0%, #3A5DAC ${(area / 100) * 100}%, #2B2937 ${(area / 100) * 100}%, #2B2937 100%)`,
  };

  return (
    <div className="bg-surface-primary border-2 md:border-4 border-border-accent rounded-lg p-3 md:p-6 max-w-3xl text-white">
        <div className="w-full flex-center flex-col gap-1 text-foreground-primary text-xs md:text-sm ">
            <Image src={handshake} alt="handshake" width={16} height={16} className="md:w-5 md:h-5" />
            <p className="opacity-90 text-center">
          Property share in multiple of 100sqft will be allotted
          <br className="hidden md:block" />
          <span className="md:hidden"> </span>subject to availability
        </p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-2 gap-2 md:gap-0">
            <div>
                <h3 className="text-sm md:text-base font-semibold"> Select Area </h3>
                <p className="text-xs mt-0.5">Move the slider to pledge remaining area.</p>
            </div>
             <p className="px-3 py-1 md:px-4 rounded-sm gradient-primary font-medium text-xs md:text-sm">
                PKR 60,000 per Sqft 
             </p>
        </div>
        <p className="py-1.5 px-2.5 md:py-2 md:px-3 rounded-full border border-border-primary ml-auto w-fit text-xs mt-4 md:mt-8">
            100 sq.ft @6.0M
        </p>
      <div className="mt-3">
        <div className="flex-1 relative">
          <Slider
            value={[area]}
            max={100}
            min={1}
            step={1}
            onValueChange={(val) => setArea(val[0])}
            className="w-full h-2 rounded-lg"
            style={sliderGradient}
          />
        </div>
        
        <div className="flex justify-between text-xs text-gray-400 mt-3">
          <span>1 sq.ft</span>
          <span>100 sq.ft</span>
        </div>
        

      </div>

      <div className="text-center text-xs md:text-sm text-gray-400 mt-2">
        {area} sq.ft @{(area * pricePerSqft).toLocaleString()} PKR
      </div>
    </div>
  );
}
