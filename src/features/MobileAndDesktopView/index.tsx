import React, { useState } from 'react'
import widgetIcon from '../../assets/widgetIcon.svg'
import textIcon from '../../assets/textIcon.svg'
import desktopIcon from '../../assets/desktopIcon.svg'
import mobileIcon from '../../assets/mobileIcon.svg'

function MobileAndDesktopView() {
    // const [showDesktopView, setShowDesktopView] = useState(false)

    const [showMobileView, setShowMobileView] = useState(false)

    return (
        <div className='flex gap-[100px]'>

            {showMobileView ? <div className='flex gap-2'>
                <h1>Hii</h1>
                <p>How are you?</p>
            </div> : <div className='flex flex-col gap-2'>
                <h1>Hii</h1>
                <p>How are you?</p>
            </div>}


            <div>
                <div className='h-[264px] w-[67px] flex flex-col shadow-lg rounded-[14px] bg-white'>
                    <button className='pt-[24px] pb-[16px] px-[18.5px] border-b-[0.5px] border-[#E4E1FF] cursor-pointer'>
                        <img src={widgetIcon} />
                    </button>
                    <button className='py-[16px] px-[22px] border-b-[0.5px] border-[#E4E1FF] cursor-pointer'>
                        <img src={textIcon} />
                    </button>
                    <button className='py-[16px] px-[18.5px] border-b-[0.5px] border-[#E4E1FF] cursor-pointer'>
                        <img src={desktopIcon} />
                    </button>
                    <button className='py-[16px] px-[18.5px] cursor-pointer' onClick={() => setShowMobileView(!showMobileView)}>
                        <img src={mobileIcon} />
                    </button>

                </div>
            </div>

        </div>
    )
}

export default MobileAndDesktopView