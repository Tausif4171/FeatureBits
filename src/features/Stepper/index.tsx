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
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-lg w-96 relative">
                <div className="absolute top-0 left-0 w-full h-4 bg-gray-200 rounded-t">
                    <div
                        className="h-full bg-blue-500 rounded-t"
                        style={{ width: `${progressBarWidth}%` }}
                    ></div>
                </div>
                <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-lg font-semibold">Stepper Popup</h2>
                        <span className="text-sm text-gray-500">Step {step}/2</span>
                    </div>
                </div>
                <div className="mb-4">
                    {/* Render content based on the current step */}
                    {step === 1 && (
                        <div>
                            <p>Step 1 content goes here</p>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-600">
                                    Your Input Label
                                </label>
                                <input
                                    type="text"
                                    className="border-b-2 border-gray-300 focus:outline-none px-1 py-3 focus:border-blue-500 w-full"
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
                        className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded"
                        onClick={nextStep}
                        disabled={step === 2}
                    >
                        {step === 2 ? 'Finish' : 'Next'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StepperPopup;
