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
    <div className="bg-surface-primary border-4 border-border-accent rounded-lg p-6 max-w-3xl text-white">
        <div className="w-full flex-center flex-col gap-1 text-foreground-primary text-sm ">
            <Image src={handshake} alt="handshake" width={20} height={20} />
            <p className="opacity-90 text-center">
          Property share in multiple of 100sqft will be allotted
          <br />
          subject to availability
        </p>
        </div>
        <div className="flex-between-center mt-2">
            <div>
                <h3 className="font-semibold"> Select Area </h3>
                <p className="text-xs mt-0.5">Move the slider to pledge remaining area.</p>
            </div>
             <p className="px-4 py-1 rounded-sm gradient-primary font-medium">
                PKR 60,000 per Sqft 
             </p>
        </div>
        <p className="py-2 px-3 rounded-full border border-border-primary ml-auto w-fit text-xs mt-8">
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

      {/* Selected Info */}
      <div className="text-center text-sm text-gray-400 mt-2">
        {area} sq.ft @{(area * pricePerSqft).toLocaleString()} PKR
      </div>
    </div>
  );
}
