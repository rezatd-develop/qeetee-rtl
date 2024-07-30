'use client'

import Image from 'next/image';

import PrimaryButton from '@/src/components/button/PrimaryButton';
import PrimarySearch from '@/src/components/search/PrimarySearch';

import enumerations from '@/src/constants/enumerations/enumerations';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../files/images/company/logo_sm.png';
import userIcon from '../../files/images/icons/user_icon.png';
import clsx from 'clsx';
import { setPageNameType } from '@/src/app/GlobalRedux/Features/pageDetails/pageDetailsSlice';

export default function MiddleHeader() {

    const dispatch = useDispatch();
    const pageNameType = useSelector((state) => state.pageDetails.pageNameType);
    const router = useRouter();

    const buttonClicked = (id) => {
        dispatch(setPageNameType(id));
        switch (id) {
            case enumerations.pageNameTypes.home:
                router.push('/')
                break;
            case enumerations.pageNameTypes.signing:
                router.push('/sign-in')
                break;
            case enumerations.pageNameTypes.cart:
                router.push('/cart')
                break;
            default:
                router.push('/sign-in')
                break;
        }
    }

    return (
        <div className='bg-light d-flex justify-content-center row mx-0'>
            <nav className="navbar navbar-expand-lg navbar-light py-3 col-12 col-lg-9 col-md-9 col-sm-12">
                <div className="container-fluid">
                    <Image onClick={() => buttonClicked(enumerations.pageNameTypes.home)} className='mx-2' width={110} src={logo} />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <PrimarySearch placeHolder='Search For Products And Brands' />

                            <PrimaryButton buttonClassName='transparent-border-color'
                                onClick={() => buttonClicked(enumerations.pageNameTypes.signing)}
                                icon={userIcon}
                                textClassName={clsx(pageNameType === enumerations.pageNameTypes.signing && 'pink-color', 'font-size-750')}
                                text='Log in / Sign Up' />

                            <PrimaryButton buttonClassName='transparent-border-color'
                                onClick={() => buttonClicked(enumerations.pageNameTypes.cart)}
                                icon={userIcon}
                                textClassName={clsx(pageNameType === enumerations.pageNameTypes.cart && 'pink-color', 'font-size-750')}
                                text='My bag' />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
