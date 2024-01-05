import React, { useState } from 'react'

function RightDetailsPanel() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='w-[100%]'>
            <div className='mx-[40px]'>
                <div>
                    <button
                        className={`flex flex-row justify-center text-white items-center rounded-[12px] gap-x-[6px] px-[12px] py-[12px] w-[auto] border-solid bg-[#000]`}
                        type='submit'
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        View Details
                    </button>
                </div>
            </div>
            {isOpen && (
                <div
                    className={'fixed right-0 top-0 w-full h-screen z-50 bg-[#1E1E1E] bg-opacity-[40%] '}
                >
                    <div className=' animate-fade-left animate-duration-300 flex justify-end items-end min-h-screen mx-auto '>
                        <div
                            className='w-[400px] flex justify-between items-start p-[40px] bg-[white] h-screen overflow-y-auto shadow-2xl'
                            style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
                        >
                            <div>
                                <p>Test</p>
                            </div>
                            <div>
                                <button
                                    className={`flex flex-row justify-center text-white items-center rounded-[12px] gap-x-[6px] px-[12px] py-[12px] w-[auto] border-solid bg-[#000]`}
                                    type='submit'
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default RightDetailsPanel