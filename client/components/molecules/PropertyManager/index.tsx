"use client";
import AreaToPledge from "@/components/atoms/AreaToPledge";
import PriceCard from "@/components/atoms/PriceCard";
import PropertySelector from "@/components/atoms/PropertySelector";
import { useState } from "react";

const PropertyManager = () => {
  const [area, setArea] = useState(1);
  const pricePerSqft = 60000;

  return (
    <>
      <PropertySelector area={area} setArea={setArea} pricePerSqft={pricePerSqft} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <PriceCard />
        <AreaToPledge area={area} pricePerSqft={pricePerSqft} />
      </div>
    </>
  );
};

export default PropertyManager;
