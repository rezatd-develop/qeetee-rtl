

import FaqItem from './FaqItem';

export default function Faq() {
    return (
        <div className='light-pink-background py-5 px-2 row mx-0 w-100 d-flex justify-content-between rounded'>
            <div className='col-12 col-lg-5 col-md-5 col-sm-12 d-flex align-items-center justify-content-center font-size-1500 fw-bold my-3 text-center'>Got Questions? Weve Got Answers!</div>
            <div className='col-12 col-lg-7 col-md-7 col-sm-12 d-flex flex-column align-items-end'>
                <FaqItem key={1} title='What payment methods do you accept?'
                    content='Yes, we offer international shipping to select countries. Shipping fees and delivery times may vary based on your location.' />
                <FaqItem key={2} title='What payment methods do you accept?'
                    content='Yes, we offer international shipping to select countries. Shipping fees and delivery times may vary based on your location.' />
                <FaqItem key={3} title='What payment methods do you accept?'
                    content='Yes, we offer international shipping to select countries. Shipping fees and delivery times may vary based on your location.' />
                <FaqItem key={4} title='What payment methods do you accept?'
                    content='Yes, we offer international shipping to select countries. Shipping fees and delivery times may vary based on your location.' />
                <FaqItem key={5} title='What payment methods do you accept?'
                    content='Yes, we offer international shipping to select countries. Shipping fees and delivery times may vary based on your location.' />
                <FaqItem key={6} title='What payment methods do you accept?'
                    content='Yes, we offer international shipping to select countries. Shipping fees and delivery times may vary based on your location.' />

            </div>
        </div>
    )
}
