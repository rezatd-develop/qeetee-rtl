import Image from 'next/image';
import arrowImg from '../../files/images/icons/arrow-narrow-left.png';

export default function CartPageHeader() {
    return (
        <div className='row mx-0 d-flex justify-content-center mt-5 ms-2'>
            <div className='col-12 col-lg-8 col-md-10 col-sm-12'>
                <Image width={20} className='mb-3' src={arrowImg} />
                <p className='mb-1 font-size-1500 fw-bold'>Cart</p>
                <p className='mb-2 font-size-875'>Cart Id: 1234567</p>
            </div>
        </div>
    )
}
