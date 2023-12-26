import React, { useState } from 'react'
import errorIcon from '../../assets/errorIcon.svg'
import nameIcon from '../../assets/nameIcon.svg'

function ImageInputBox() {
    let errors = false
    const [name, setName] = useState()
    return (
        <div className={`mb-[20px] mt-5 flex flex-col w-[300px]`}>
            <label className='text-[14px] mb-[4px] text-[#202223] font-InstrumentMedium'>
                Your Name
            </label>
            <div className='flex flex-col items-start relative'>
                <input
                    tabIndex={0}
                    spellCheck={false}
                    className={`${errors
                        ? 'border-[1px] border-solid border-[#D72C0D] bg-[#FFF4F4]'
                        : 'border-solid border-[1px] border-[#D2D5D8]'
                        } px-[32px] py-[8px] text-[15px] font-InstrumentMedium text-[#202223] w-[100%] rounded-[4px] outline-none `}
                    placeholder={'Please enter your name'}
                    type={'text'}
                    onChange={(e: any) => setName(e.target.value)}
                    value={name}
                    name={name}
                />
                <img
                    src={nameIcon}
                    alt='Error Icon'
                    className='absolute left-[10px] top-[50%] transform translate-y-[-50%]'
                />
                {errors && (
                    <div className='mt-[4px] gap-[8px] text-[#D72C0D] flex flex-row text-[14px] font-InstrumentMedium'>
                        <img src={errorIcon} alt='Error Icon' />
                        <p>{errors}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ImageInputBox