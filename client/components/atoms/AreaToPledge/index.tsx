import React from 'react';
import { AreaToPledgeProps } from './types';
import { maxArea, totalBrackets } from './constants';

const AreaToPledge: React.FC<AreaToPledgeProps> = ({ area, pricePerSqft }) => {
  const totalPrice = area * pricePerSqft;;
  const filledBrackets = Math.round((area / maxArea) * 100);

  const getBracketColor = (index: number) => {
    if (index < filledBrackets) {
      return 'bg-surface-secondary'; 
    } else if (index < 100) {
      return 'bg-surface-personalized opacity-90'; 
    } else {
      return 'bg-surface-primary border-[0.5px] border-border-primary';
    }
  };

  return (
    <div>
    <div className="flex flex-col gap-2 bg-surface-primary px-6 py-4 rounded-t-lg">
      <span className="text-sm text-foreground-primary font-semibold">Area to Pledge</span>
        <div className="flex gap-2">
      <div className="area-to-pledge-value flex-between-center">
          <span className="text-lg font-semibold text-foreground-primary">{area}</span>
          <span className="text-sm text-foreground-primary opacity-70">sq.ft</span>
        </div>
      </div>
      <span className="text-sm text-foreground-primary font-semibold mt-4">Selected Area to Preview </span>
      <div className="flex gap-0.5 flex-wrap">
        {Array.from({ length: totalBrackets }).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 ${getBracketColor(index)}`}
          />
        ))}
      </div>

      <span className="area-to-pledge-label"> Total Price </span>
        <div className="flex gap-2">
      <div className="area-to-pledge-value flex-between-center">
          <span className="text-lg font-semibold text-foreground-primary">  {totalPrice.toLocaleString()}</span>
          <span className="text-sm text-foreground-primary opacity-70">PKR</span>
        </div>

      </div> 
    </div>
    <button className="w-full py-2 gradient-primary text-foreground-primary font-bold rounded-b-md hover:opacity-90 transition-opacity">
        Proceed
      </button>
      </div>
  );
};

export default AreaToPledge;
