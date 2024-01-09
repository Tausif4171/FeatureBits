import React, { useState } from 'react'
import widgetIcon from '../../assets/widgetIcon.svg'
import textIcon from '../../assets/textIcon.svg'
import desktopIcon from '../../assets/desktopIcon.svg'
import mobileIcon from '../../assets/mobileIcon.svg'

function MobileAndDesktopView() {

    const [showMobileView, setShowMobileView] = useState(false)

    return (
        <div>
            <div>
                <div className='h-[264px] w-[67px] flex flex-col shadow-lg rounded-[14px] bg-white'>
                    <div className='pt-[24px] pb-[16px] px-[18.5px] border-b-[0.5px] border-[#E4E1FF] cursor-pointer'>
                        <img src={widgetIcon} />
                    </div>
                    <div className='py-[16px] px-[22px] border-b-[0.5px] border-[#E4E1FF] cursor-pointer'>
                        <img src={textIcon} />
                    </div>
                    <div className='py-[16px] px-[18.5px] border-b-[0.5px] border-[#E4E1FF] cursor-pointer'>
                        <img src={desktopIcon} />
                    </div>
                    <div className='py-[16px] px-[18.5px] cursor-pointer'>
                        <img src={mobileIcon} />
                    </div>

                </div>
            </div>
            <div className='flex gap-2'>
                <h1>Hii</h1>
                <p>How are you?</p>
            </div>
        </div>
    )
}

export default MobileAndDesktopView