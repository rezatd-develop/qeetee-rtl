
import clsx from 'clsx';

import ratingElement from '../../files/images/elements/rating.png';
import bagWhiteIcon from '../../files/images/icons/bag-white-icon.png';
import SbButton from '../button/SbButton';
import SecondaryPinkButton from '../button/SecondaryPinkButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function ProductCard({ onClick, cardClassName, img, slogan, title, price }) {
    return (
        <div onClick={onClick} className={clsx(cardClassName, 'd-flex flex-column justify-center align-items-center mb-4')}>
            <img className='w-100' src={img.src} />
            <p className='mb-0 mt-2 font-size-750 info-color'>{slogan}</p>
            <p className='d-flex justify-content-center font-size-1125 font-weight-900'>{title}</p>
            <img className='w-50 mb-2' src={ratingElement.src} />
            <p className='font-size-1000 fw-bold'>{price}</p>
            <SbButton variant='contained'
                startIcon={<AddShoppingCartIcon />}
                className='pink-background'>
                اضافه به سبد خرید
            </SbButton>
        </div>
    )
}
