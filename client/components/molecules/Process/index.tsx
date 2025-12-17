import { process, processItem } from '@/assets/icons';
import Image from 'next/image';
import React from 'react';

const Process : React.FC = () => {

  const steps = [
    {
      title: "Payment Review",
      description: "Once Your Payment Is Confirmed, Your Tokens Will Appear In Both The Dubai REST App And Your PRYPCO Mint Wallet.",
    },
    {
      title: "Ownership Certificate",
      description: "Once The Property Is Fully Funded, Your Official Property Token Ownership Certificate, Issued By DLD, Will Be Available On The Dubai REST App.",
    },
    {
      title: "Monthly Rental Income",
      description: "When The Property Is Rented, You'll Start Receiving Monthly Rental Income Directly In Your PRYPCO Mint Wallet.",
    },
    {
      title: "Exits Made Easy",
      description: "After The 3-Month Lock-In Period, You Can List Your Property Tokens For Sale On Our Marketplace, Providing More Flexibility Compared To Traditional Real Estate.",
    },
  ];

  return (
   <div className="max-width-xs">
    <div className='flex gap-3 items-center mb-8'>
        <Image src={process} alt="Process Icon" width={20} height={20} className='ml-1.5' />
         <h2 className="text-2xl font-semibold text-foreground-secondary">What&apos;s the process?</h2>

    </div>

      <div className="relative">
    
        <div className="absolute left-4 -top-4 -bottom-4 w-0.75 bg-surface-secondary" />

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex items-start pl-12">
              

              <div className="absolute left-0 top-0 translate-x-0.5 flex items-center justify-center">
                <div className="w-8 h-8 bg-surface-secondary rounded-full flex items-center justify-center z-10">
                    <Image src={processItem} alt='process Item' width={16} height={16} />
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-1">
                <h3 className="font-bold text-foreground-secondary">
                  {step.title}
                </h3>
                <p className="text-foreground-secondary opacity-70 text-xs text-justify ">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Process;
