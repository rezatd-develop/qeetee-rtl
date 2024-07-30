
import clsx from 'clsx';

import SecondaryPinkButton from '../button/SecondaryPinkButton';
import redHoodie from '../../files/images/products/red_hoodie.png';
import ratingElement from '../../files/images/elements/rating.png';
import bagWhiteIcon from '../../files/images/icons/bag-white-icon.png';

export default function ProductCard({ onClick, cardClassName, img, slogan, title, price }) {
    return (
        <div onClick={onClick} className={clsx(cardClassName, 'd-flex flex-column justify-center align-items-center mb-4')}>
            <img className='w-100' src={img.src} />
            <p className='mb-0 mt-2 font-size-750 info-color'>{slogan}</p>
            <p className='fw-bold d-flex justify-content-center'>{title}</p>
            <img className='w-50 mb-2' src={ratingElement.src} />
            <p className='font-size-1000 fw-bold'>{price}</p>
            <SecondaryPinkButton buttonClassName='rounded' icon={bagWhiteIcon} text='ADD TO BAG' />
        </div>
    )
}
