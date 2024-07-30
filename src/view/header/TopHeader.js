"use client"

import Image from 'next/image';

import PrimarySelect from '@/src/components/select/PrimarySelect';
import SocialIcons from '@/src/components/social/SocialIcons';
import divider from '../../files/images/elements/divider_line.png'
import location from '../../files/images/icons/location_icon.png';

export default function TopHeader() {
    return (
        <div className='d-flex justify-content-center py-3 align-items-center font-size-750 dark-gray-background row mx-0'>
            <div className='d-none d-lg-flex d-md-flex d-sm-none align-items-center justify-content-between'>
                <div className='d-flex align-items-center'>
                    <Image className='mx-2' width={12} src={location} />
                    <div className='text-color fw-bold'>021-5694 9856</div>
                    <Image className='mx-2' src={divider} />
                    <div className='text-color fw-bold'>021-6542 5489</div>
                </div>
                <div className='d-flex align-items-center mx-3'>
                    <SocialIcons />
                </div>
            </div>
        </div>
    )
}
