'use client'

import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { setPageNameType } from '@/src/app/GlobalRedux/Features/pageDetails/pageDetailsSlice';
import SbButton from '@/src/components/button/SbButton';
import enumerations from '@/src/constants/enumerations/enumerations';
import logo from '../../files/images/company/logo_sm.png';

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
                    <div className="collapse navbar-collapse justify-content-end row" id="navbarNavAltMarkup">
                        <div className="navbar-nav d-flex col-5 d-flex justify-content-end">
                            <SbButton variant='outline'
                                onClick={() => buttonClicked(enumerations.pageNameTypes.signing)}
                                startIcon={<LoginIcon />}
                                className='px-1'
                                labelClassName='font-weight-900'>
                                ورود | ثبت نام
                            </SbButton>
                            <SbButton variant='outline'
                                onClick={() => buttonClicked(enumerations.pageNameTypes.cart)}
                                startIcon={<ShoppingCartIcon />}
                                className='px-1'
                                labelClassName='font-weight-900'>
                                سبد خرید
                            </SbButton>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
