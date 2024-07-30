'use client'

import PrimaryButton from '@/src/components/button/PrimaryButton';
import tabs from '@/src/constants/tabs/tabs';
import { useDispatch, useSelector } from 'react-redux';
import { setPageNameType } from '@/src/app/GlobalRedux/Features/pageDetails/pageDetailsSlice';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import enumerations from '@/src/constants/enumerations/enumerations';

export default function BottomHeader() {

    const pageNameType = useSelector((state) => state.pageDetails.pageNameType);
    const dispatch = useDispatch();
    const router = useRouter()

    const tabClicked = (id) => {
        dispatch(setPageNameType(id));
        switch (id) {
            case enumerations.pageNameTypes.home:
                router.push('/')
                break;
            case enumerations.pageNameTypes.products:
                router.push('/products')
                break;
            case enumerations.pageNameTypes.contactUs:
                router.push('/contact-us')
                break;
            case enumerations.pageNameTypes.terms:
                router.push('/terms-and-conditions')
                break;
            default:
                router.push('/')
                break;
        }
    }

    return (
        <div className='bg-light d-flex justify-content-center border pt-2 row mx-0'>
            <div className='col-12 col-lg-9 col-md-9 col-sm-12'>
                {tabs.map(tab =>
                    <PrimaryButton activeButton={pageNameType}
                        key={tab.id}
                        text={tab.value}
                        buttonClassName={tab.id === pageNameType ? 'pink-border-only-bottom pb-2' : 'transparent-border-color'}
                        textClassName={clsx(tab.id === pageNameType && 'pink-color fw-bold', 'font-size-750 mx-3')}
                        onClick={() => tabClicked(tab.id)} />
                )}
            </div>
        </div>
    )
}
