import Image from 'next/image'
import emptyRating from '../../files/images/elements/empty-rating.png';
// import OutlineButton from '@/src/components/button/OutlineButton';

export default function LeaveProductReview() {
    return (
        <div>
            <div className='font-size-1500 prompt- mt-2'>تجربه‌تان را با ما در میان بگذارید.</div>
            <div className="mb-2">
                <p className="font-size-750  mt-2 light-text-color  mb-1">نام شما*</p>
                <input className='w-100 p-1 purchase-message' type="text" placeholder="نام"></input>
            </div>
            <div className="mb-2">
                <p className="font-size-750  mt-2 light-text-color  mb-1">ایمیل*</p>
                <input className='w-100 p-1 purchase-message' type="text" placeholder="email@example.com"></input>
            </div>
            {/* <div className="mb-2">
                <p className="font-size-750  mt-2 light-text-color  mb-1">Product you’re reviewing*</p>
                <input className='w-100 p-1 purchase-message' type="text" placeholder="Cashmere Coat - E12345678FGT489"></input>
            </div> */}
            <div className="row mx-0 d-flex justify-content-between">
                {/* <div className="mb-2 px-0 col-6">
                    <p className="font-size-750  mt-2 light-text-color  mb-1">Date of purchase*</p>
                    <input className='p-1 purchase-message w-100' type="date" placeholder=""></input>
                </div> */}
                {/* <div className="mb-2 col-5 px-0 mx-0 justify-content-between">
                    <p className="font-size-750  mt-2 light-text-color  mb-1">Order ID*</p>
                    <input className='p-1 purchase-message w-100' type="text" placeholder=""></input>
                </div> */}
            </div>
            <div className="row mx-0 d-flex justify-content-between">
                <div className="mb-2 px-0 col-6">
                    <p className="font-size-750  mt-2 light-text-color  mb-1">به محصول امتیاز دهید.*</p>
                    <Image src={emptyRating} />
                </div>
                {/* <div className="mb-2 col-5 px-0 mx-0 justify-content-between">
                    <p className="font-size-750  mt-2 light-text-color  mb-1">ضمیمه</p>
                </div> */}
            </div>
            <div className="mb-2">
                <p className="font-size-750  mt-2 light-text-color  mb-1">تیتر*</p>
                <input className='w-100 p-1 purchase-message' type="text" placeholder="نظرتان در مورد محصول"></input>
            </div>
            <div className="mb-2">
                <p className="font-size-750  mt-2 light-text-color  mb-1">آیا از محصول راضی بودید؟</p>
                <input className='w-100 p-1 purchase-message review-detail' type="text" placeholder="نظرتان را بنویسید"></input>
            </div>
            <div className='d-flex align-items-center'>
                <input type="radio" value="HTML" className='me-2' />
                <label for="html" className='font-size-750'><a href='#'>قوانین و توافقنامه ها</a>  را خواندم و تایید میکنم </label>
            </div>
        </div>
    )
}
