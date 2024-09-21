import ReviewCard from "@/src/components/card/ReviewCard";
import ReviewsSummary from "./ReviewsSummary";
import Image from 'next/image';

import reviewImgOne from '../../files/images/products/review-img-1.png';
import reviewImgTwo from '../../files/images/products/review-img-2.png';
import expandIcon from '../../files/images/elements/expand-down.png';


export default function Reviews() {

    const testData = [
        {
            id: 1,
            title: 'Excellent Quality',
            comment: '“Maecenas vel risus in nisl facilisis volutpat. Sed condimentum ipsum bibendum, hendrerit nunc quis, gravida sem. Duis at dictum lorem”',
            images: [],
            author: 'John Doe',
            publishDate: '3 days ago',
            button: 'Share',
        },
        {
            id: 2,
            title: 'Good tailoring coat',
            comment: '“Maecenas vel risus in nisl facilisis volutpat!”',
            images: [{ id: 1, url: reviewImgOne }, { id: 2, url: reviewImgTwo }],
            author: 'John Doe',
            publishDate: '3 days ago',
            button: 'Share',
        },
    ]

    return (
        <div className="mt-3">
            <ReviewsSummary />
            {testData.map((item, index) =>
                <ReviewCard key={index}
                    title={item.title}
                    comment={item.comment}
                    images={item.images}
                    author={item.author}
                    publishDate={item.publishDate}
                    button={item.button} />
            )}
            <div className="d-flex justify-content-center align-items-center review-load-more py-1 mt-4">
                <span className="font-size-875 me-2">Load More</span>
                <Image src={expandIcon} />
            </div>
        </div>
    )
}
