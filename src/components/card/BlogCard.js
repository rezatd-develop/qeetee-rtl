
import clsx from 'clsx';

import SecondaryPinkButton from '../button/SecondaryPinkButton';

export default function BlogCard({ cardClassName, img, category, author, date, title }) {
    return (
        <div className={clsx(cardClassName, 'd-flex flex-column justify-content-start ')}>
            <img className='w-100 rounded' src={img.src} />
            <div className='blog-card-category-label ms-3'>
                <SecondaryPinkButton buttonClassName='rounded' text={category} />
            </div>
            <div className='d-flex justify-content-between info-color'>
                <p className='mb-0 font-size-750'>{author}</p>
                <p className='mb-0 font-size-750'>{date}</p>
            </div>
            <p className='mb-0 font-size-1125 mt-2 font-weight-900'>{title}</p>
        </div>
    )
}
