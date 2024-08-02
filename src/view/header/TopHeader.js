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
                    <div className='text-color fw-bold'>فروشگاه Shik Best | اول پرو کنید، بعد ببرید</div>
                </div>
                <div className='d-flex align-items-center mx-3'>
                    <SocialIcons />
                </div>
            </div>
        </div>
    )
}
