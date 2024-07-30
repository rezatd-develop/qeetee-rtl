"use client"

import { useState } from 'react';
import Image from 'next/image';

import expandIcon from '../../files/images/elements/expand-down.png';

export default function CustomSelect({ options, optionsClassName }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0].label);

    return (
        <div className='custom-select'>
            <div className='selected-option border d-flex justify-content-between align-items-center' onClick={() => setIsOpen(!isOpen)}>
                <div className='d-flex justify-content-start align-items-center py-2 px-1'>
                    {!!options[0].icon && <Image src={options[0].icon} width="20" />}
                    <span className='ms-2 font-size-750'>{selectedOption}</span>
                </div>
                <div className='m-2'>
                    <Image src={expandIcon} />
                </div>
            </div>
            {isOpen && (
                <div className='options-container border'>
                    {options.map((option, index) => (
                        <div key={index} className='my-1 px-2' onClick={() => { setSelectedOption(option.label); setIsOpen(false); }}>
                            {!!option.icon && <Image src={option.icon} className='m-1' width="20" height="20" />}
                            <span className='font-size-750'>{option.label}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
