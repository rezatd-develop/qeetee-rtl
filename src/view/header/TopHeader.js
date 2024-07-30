"use client"

import Image from 'next/image';


import PrimarySelect from '@/src/components/select/PrimarySelect';
import SocialIcons from '@/src/components/social/SocialIcons';
import divider from '../../files/images/elements/divider_line.png'
import location from '../../files/images/icons/location_icon.png';


export default function TopHeader() {
    return (
        <div className='d-flex justify-content-center py-3 align-items-center font-size-750 dark-gray-background row mx-0'>
            <div className='d-flex justify-content-between col-12 col-lg-9 col-md-9 col-sm-12'>
                <div className='d-none d-lg-flex d-md-flex d-sm-none align-items-center '>
                    <div className='d-flex align-items-center mx-3'>
                        <SocialIcons />
                    </div>
                    <Image className='mx-1' src={divider} />
                    <div className='d-flex align-items-center'>
                        <Image className='mx-2' width={12} src={location} />
                        <div className='text-color'>123 Anywhere Street, Anytown USA</div>
                    </div>
                </div>
                <div className='d-flex align-items-center '>
                    <div>
                        <PrimarySelect options={['Pounds', 'Dollar']} />
                    </div>
                    <Image className='mx-1' src={divider} />
                    <div>
                        <PrimarySelect options={['English', 'France']} />
                    </div>
                </div>
            </div>
        </div>
    )
}
