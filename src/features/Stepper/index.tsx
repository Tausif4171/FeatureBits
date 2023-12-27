// StepperPopup.js

import React, { useState } from 'react';

const StepperPopup = () => {
    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const prevStep = () => {
        setStep((prevStep) => Math.max(prevStep - 1, 1));
    };

    const progressBarWidth = ((step - 1) / 2) * 100; // Assuming there are 2 steps

    return (
        <div className="fixed bg-[#1E1E1E] bg-opacity-[40%] top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="bg-white p-8 rounded-[16px] shadow-lg w-[450px] h-[400px] relative">
                <div className="absolute top-0 left-0 w-full h-[6px] bg-[#D9D9D9] rounded-t-[16px]">
                    <div
                        className="h-full bg-[#313131] rounded-t-[16px]"
                        style={{ width: `${progressBarWidth}%` }}
                    ></div>
                </div>
                <div className="mb-4">
                    <p className='text-[#263657] text-[24px] font-medium'>What applications do you want to integrate with timefix?</p>
                </div>
                <div className="mb-4">
                    {/* Render content based on the current step */}
                    {step === 1 && (
                        <div>
                            {/* <p>Step 1 content goes here</p> */}
                            <div className="mb-4">
                                {/* <label className="block text-sm font-medium text-gray-600">
                                    Your Input Label
                                </label> */}
                                <input
                                    type="text"
                                    className="border-b-2 border-gray-300 focus:outline-none px-1 py-3 w-full"
                                    placeholder="Enter your text"
                                />
                            </div>
                        </div>
                    )}
                    {step === 2 && <p>Step 2 content goes here</p>}
                </div>
                <div className="flex justify-between">
                    <button
                        className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
                        onClick={prevStep}
                        disabled={step === 1}
                    >
                        Previous
                    </button>
                    <button
                        className="bg-[#222222] text-white text-[14px] font-medium px-[6.71px] py-[5.22px] rounded-[8px] leading-[19.6px] w-[107px] h-[44px]"
                        onClick={nextStep}
                        disabled={step === 2}
                    >
                        <span>{step === 2 ? 'Finish' : 'Next'}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StepperPopup;
