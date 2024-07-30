import Image from 'next/image'

import ratingImg from '../../files/images/elements/rating.png';


export default function ReviewCard({ key, title, comment, author, images, publishDate, button }) {
    return (
        <div key={key} className='light-gray-background p-3 px-4 my-3'>
            <Image width={90} src={ratingImg} />
            <p className='font-size-875 mt-2 fw-bold mb-2'>{title}</p>
            <p className='font-size-875'>{comment}</p>
            {images?.length > 0 && images?.map(img =>
                <Image key={img?.id} className='mb-2' width={90} src={img?.url} />
            )}
            <p className='font-size-875 mb-2'>{author}</p>
            <div className='d-flex align-items-center'>
                <p className='font-size-750 me-1'>{publishDate} . </p>
                <p className='font-size-750'>{button}</p>
            </div>
        </div>
    )
}
