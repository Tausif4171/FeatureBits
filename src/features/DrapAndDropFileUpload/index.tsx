import React, { useState, useEffect, useRef } from 'react';
import editIconInBlack from '../../assets/editIconInBlack.svg';
import './loader.css';

function DragAndDropFileUpload() {

    const [isEditMode, setIsEditMode] = useState(false);
    const [selectedImage, setSelectedImage] = useState<any>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isUploading, setIsUploading] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsUploading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, [isUploading]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            setIsUploading(true);
            const reader = new FileReader();

            reader.onload = (e) => {
                const imageData = e.target?.result as string;
                setSelectedImage(imageData);
                setIsEditMode(false);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleEditClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();

        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();

        const file = e.dataTransfer.files?.[0];

        if (file) {
            setIsUploading(true);
            const reader = new FileReader();

            reader.onload = (event) => {
                const imageData = event.target?.result as string;
                setSelectedImage(imageData);
                setIsEditMode(false);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleDivClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const goToNextStep = async () => { };

    return (
        <div>
            <div className='mb-[116px] mt-[48px]'>
                <p className='text-[#535364] text-[14px] font-InstrumentMedium mb-[4px]'>
                    Company logo
                </p>
                <div
                    className='relative w-[402px] h-[138px] bg-[#F5F5F5] flex flex-col justify-center items-center cursor-pointer rounded-[4px] border-[1px] border-dotted border-[#DEDEDE]'
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={handleDivClick}
                >
                    {selectedImage && !isEditMode && !isUploading ? (
                        <>
                            <div className='text-center'>
                                <img
                                    src={selectedImage}
                                    alt='Selected'
                                    className='max-w-[400px] max-h-[400px]'
                                />
                            </div>
                            <div
                                className='flex justify-end items-end absolute right-0 bottom-0 p-3 cursor-pointer bg-[#F5F5F5]'
                                onClick={handleEditClick}
                            >
                                <img src={editIconInBlack} alt='Edit Icon' />
                            </div>
                            <input
                                type='file'
                                id='fileInput'
                                ref={fileInputRef}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: 0,
                                    height: 0,
                                    opacity: 0,
                                }}
                                onChange={handleFileChange}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                            />
                        </>
                    ) : (
                        <>
                            {isUploading ? (
                                <div className='flex flex-col justify-center items-center'>
                                    <span className='loader'></span>
                                    <div className='mt-2 text-[#535364] text-[14px] font-InstrumentSemibold'>
                                        Uploading...
                                    </div>
                                </div>
                            ) : (
                                <>
                                    {' '}
                                    <input
                                        type='file'
                                        id='fileInput'
                                        ref={fileInputRef}
                                        style={{ display: 'none' }}
                                        onChange={handleFileChange}
                                        onDragOver={handleDragOver}
                                        onDragLeave={handleDragLeave}
                                    />
                                    <p className='text-[#535364] text-[14px] font-InstrumentSemibold'>
                                        Drag & Drop or click here to Upload
                                    </p>
                                    <p className='text-[#C5C5C5] text-[12px] font-InstrumentSemibold'>
                                        *png, *jpeg files up to 10MB at least 400px by 400px
                                    </p>
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>
            <button
                className={
                    !selectedImage
                        ? 'flex flex-row justify-center items-center  rounded-[53rem] gap-x-[6px] w-[150px] h-[44px] border-solid bg-[#eeeeee] cursor-not-allowed'
                        : `flex flex-row justify-center items-center  rounded-[53rem] gap-x-[6px] w-[150px] h-[44px] border-solid bg-[#000] hover:bg-[#2837A5]`
                }
                type='submit'
                onClick={goToNextStep}
            >
                <span
                    className={
                        !selectedImage
                            ? 'text-[14px] text-[#000] font-InstrumentMedium'
                            : 'text-[14px] text-[#ffff] font-InstrumentMedium'
                    }
                >
                    Next
                </span>
                {/* <img src={nextArrowIcon} className='w-5 h-5' /> */}
                <svg
                    width='11'
                    height='12'
                    viewBox='0 0 11 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    {!selectedImage ? (
                        <path
                            d='M0.149902 5.33333V6.66667H8.1499L4.48324 10.3333L5.4299 11.28L10.7099 6L5.4299 0.720001L4.48324 1.66667L8.1499 5.33333H0.149902Z'
                            fill='black'
                        ></path>
                    ) : (
                        <path
                            d='M0.149902 5.33333V6.66667H8.1499L4.48324 10.3333L5.4299 11.28L10.7099 6L5.4299 0.720001L4.48324 1.66667L8.1499 5.33333H0.149902Z'
                            fill='white'
                        ></path>
                    )}
                </svg>
            </button>
        </div>
    );
}

export default DragAndDropFileUpload;
