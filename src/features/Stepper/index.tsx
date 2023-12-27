// StepperPopup.js

import React, { useState } from 'react';
import closeIcon from '../../assets/closeIcon.svg'
import forwardArrowIcon from '../../assets/forwardArrowIcon.svg'

const StepperPopup = () => {
    const [integrateApp, setIntegrateApp] = useState('')
    console.log({ integrateApp })
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
            <div className="bg-white p-6 rounded-[16px] shadow-lg w-[450px] h-[400px] relative overflow-hidden">
                {step === 3 ? <></> : <div className="absolute top-0 left-0 w-full h-[6px] bg-[#D9D9D9] rounded-t-[16px] ">
                    <div
                        className="h-full bg-[#313131] rounded-r-[16px]"
                        style={{ width: `${progressBarWidth}%` }}
                    ></div>
                </div>}

                <div className="mb-[24px]">
                    {/* Render content based on the current step */}
                    {step === 1 && (
                        <div>
                            <div className="mb-[100px]">
                                <p className='text-[#263657] text-[24px] font-medium'>What applications do you want to integrate with timefix?</p>
                            </div>
                            {/* <p>Step 1 content goes here</p> */}
                            <div className="mb-4">
                                {/* <label className="block text-sm font-medium text-gray-600">
                                    Your Input Label
                                </label> */}
                                <input
                                    type="text"
                                    value={integrateApp}
                                    onChange={(e: any) => setIntegrateApp(e.target.value)}
                                    className="border-b-2 border-gray-300 text-[20px] font-medium text-[#000000] leading-[24.4px] focus:outline-none px-1 py-3 w-full"
                                    placeholder="Enter your text"
                                />
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div>
                            <div className="mb-[100px]">
                                <p className='text-[#263657] text-[24px] font-medium'>What do you want these integrations to do? why?</p>
                            </div>
                            {/* <p>Step 1 content goes here</p> */}
                            <div className="mb-4">
                                {/* <label className="block text-sm font-medium text-gray-600">
                                    Your Input Label
                                </label> */}
                                <input
                                    type="text"
                                    className="border-b-2 border-gray-300 text-[20px] font-medium text-[#000000] leading-[24.4px] focus:outline-none px-1 py-3 w-full"
                                    placeholder="Enter your text"
                                />
                            </div>
                        </div>
                    )}

                    {step === 3 && (<div>
                        <div className='flex justify-end mb-[64px]'>
                            <img src={closeIcon} />
                        </div>
                        <div className="mb-[60px]">
                            <p className='text-[#263657] text-[24px] font-medium leading-[33.6px]'>Thanks for helping us improve We’ll be in touch! 🙂❤️</p>
                        </div>
                        {/* <p>Step 1 content goes here</p> */}
                        {/* <div className="mb-4">

                            <input
                                type="text"
                                className="border-b-2 border-gray-300 text-[20px] font-medium text-[#000000] leading-[24.4px] focus:outline-none px-1 py-3 w-full"
                                placeholder="Enter your text"
                            />
                        </div> */}
                    </div>)}
                </div>
                <div className="flex justify-start gap-x-[12px]">

                    <button
                        className={` ${integrateApp ? 'bg-[#222222] text-white cursor-pointer' : 'bg-[#CCCCCC] text-white cursor-not-allowed'} gap-x-[5.97px] text-[14px] font-medium px-[35.5px] py-[11.5px] rounded-[8px] flex justify-center items-center  `}
                        onClick={nextStep}
                        disabled={!integrateApp} // Disable the button if integrateApp is empty
                    >
                        <span className=' leading-[19.6px]'>{step === 3 ? 'Try again' : 'Next'}</span>
                        {step !== 3 && <img src={forwardArrowIcon} />}
                    </button>
                    {step === 3 && <button
                        className="bg-[#FFFFFF] leading-[17.08px] text-[#000000] border-[1px] text-[14px] font-medium border-[#CCCCCC] px-[35.5px] py-[11.5px] rounded-[8px] flex justify-center items-center cursor-pointer"
                    >
                        Cancel
                    </button>}
                </div>
            </div>
        </div>
    );
};

export default StepperPopup;
