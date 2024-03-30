'use client'
import React, { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const AccordionItem = ({ title, content }: any) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                className='flex justify-between items-center p-[20px]'
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className='text-[16px] text-[#FFFFFF]'> {title}</p>
                <div>
                    {isOpen ? <IoIosArrowUp color='#fff' /> : <IoIosArrowDown color='#fff' />}
                </div>

            </div>
            {isOpen && (
                <div className="p-4 bg-[#111928] border border-[#757575]  shadow-sm text-[#fff]">
                    {content}
                </div>
            )}
        </>
    );
};

export default AccordionItem;