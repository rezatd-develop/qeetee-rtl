

import FaqItem from './FaqItem';

export default function Faq() {
    return (
        <div className='light-pink-background py-5 px-2 row mx-0 w-100 d-flex justify-content-between rounded'>
            <div className='col-12 col-lg-5 col-md-5 col-sm-12 d-flex align-items-center justify-content-center font-size-1500 yekan-bakh-fat-font my-3 text-center'>پر تکرار ترین سوالات را می‌توانید در اینجا ببینید!</div>
            <div className='col-12 col-lg-7 col-md-7 col-sm-12 d-flex flex-column align-items-end'>
                <FaqItem key={1} title='چه روش های پرداختی مورد قبول است؟'
                    content='وبسایت شیک بست با همکاری با بانک ملت و همچنین زرین پال، درگاه های پرداخت مختلفی را در اختیار شما عزیزان قرار می‌دهد.' />
                <FaqItem key={2} title='چه روش های پرداختی مورد قبول است؟'
                    content='وبسایت شیک بست با همکاری با بانک ملت و همچنین زرین پال، درگاه های پرداخت مختلفی را در اختیار شما عزیزان قرار می‌دهد.' />
                <FaqItem key={3} title='چه روش های پرداختی مورد قبول است؟'
                    content='وبسایت شیک بست با همکاری با بانک ملت و همچنین زرین پال، درگاه های پرداخت مختلفی را در اختیار شما عزیزان قرار می‌دهد.' />
                <FaqItem key={4} title='چه روش های پرداختی مورد قبول است؟'
                    content='وبسایت شیک بست با همکاری با بانک ملت و همچنین زرین پال، درگاه های پرداخت مختلفی را در اختیار شما عزیزان قرار می‌دهد.' />
                <FaqItem key={5} title='چه روش های پرداختی مورد قبول است؟'
                    content='وبسایت شیک بست با همکاری با بانک ملت و همچنین زرین پال، درگاه های پرداخت مختلفی را در اختیار شما عزیزان قرار می‌دهد.' />
                <FaqItem key={6} title='چه روش های پرداختی مورد قبول است؟'
                    content='وبسایت شیک بست با همکاری با بانک ملت و همچنین زرین پال، درگاه های پرداخت مختلفی را در اختیار شما عزیزان قرار می‌دهد.' />

            </div>
        </div>
    )
}
