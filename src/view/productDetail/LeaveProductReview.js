import Image from 'next/image'
import emptyRating from '../../files/images/elements/empty-rating.png';
// import OutlineButton from '@/src/components/button/OutlineButton';

export default function LeaveProductReview() {
    return (
        <div>
            <div className='font-size-1500 prompt- mt-2'>Leave Product Review</div>
            <p className="font-size-750  mt-2">Complete the product review form below</p>
            <div className="mb-2">
                <p className="font-size-750  mt-2 light-text-color  mb-1">Name as you want it to appear on the review*</p>
                <input className='w-100 p-1 purchase-message' type="text" placeholder="Name or Nick"></input>
            </div>
            <div className="mb-2">
                <p className="font-size-750  mt-2 light-text-color  mb-1">Email*</p>
                <input className='w-100 p-1 purchase-message' type="text" placeholder="email@example.com"></input>
            </div>
            <div className="mb-2">
                <p className="font-size-750  mt-2 light-text-color  mb-1">Product you’re reviewing*</p>
                <input className='w-100 p-1 purchase-message' type="text" placeholder="Cashmere Coat - E12345678FGT489"></input>
            </div>
            <div className="row mx-0 d-flex justify-content-between">
                <div className="mb-2 px-0 col-6">
                    <p className="font-size-750  mt-2 light-text-color  mb-1">Date of purchase*</p>
                    <input className='p-1 purchase-message w-100' type="date" placeholder=""></input>
                </div>
                <div className="mb-2 col-5 px-0 mx-0 justify-content-between">
                    <p className="font-size-750  mt-2 light-text-color  mb-1">Order ID*</p>
                    <input className='p-1 purchase-message w-100' type="text" placeholder=""></input>
                </div>
            </div>
            <div className="row mx-0 d-flex justify-content-between">
                <div className="mb-2 px-0 col-6">
                    <p className="font-size-750  mt-2 light-text-color  mb-1">Please rate the product*</p>
                    <Image src={emptyRating} />
                </div>
                <div className="mb-2 col-5 px-0 mx-0 justify-content-between">
                    <p className="font-size-750  mt-2 light-text-color  mb-1">Attachment</p>
                    {/* <OutlineButton buttonClassName='w-100' text='ADD FILES' /> */}
                </div>
            </div>
            <div className="mb-2">
                <p className="font-size-750  mt-2 light-text-color  mb-1">Title*</p>
                <input className='w-100 p-1 purchase-message' type="text" placeholder="Your main opinion, 2-3 words"></input>
            </div>
            <div className="mb-2">
                <p className="font-size-750  mt-2 light-text-color  mb-1">Product detail review</p>
                <input className='w-100 p-1 purchase-message review-detail' type="text" placeholder="Type your review details…"></input>
            </div>
            <div className='d-flex align-items-center'>
                <input type="radio" value="HTML" className='me-2' />
                <label for="html" className='font-size-750'>I have read and accepted <a href='#'>Terms & Conditions</a></label>
            </div>
        </div>
    )
}
