'use client'

import Image from 'next/image';

import logo from '../../files/images/company/logo_sm.png';
import enumerations from '@/src/constants/enumerations/enumerations';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { setPageNameType } from '@/src/app/GlobalRedux/Features/pageDetails/pageDetailsSlice';

export default function TopFooter() {

    const dispatch = useDispatch();
    const router = useRouter();

    const logoClicked = (id) => {
        dispatch(setPageNameType(id));
        router.push('/')
    }

    return (
        <div className='d-flex justify-content-center pb-4 pt-5'>
            <Image onClick={() => logoClicked(enumerations.pageNameTypes.home)} src={logo} width={140} />
        </div>
    )
}
