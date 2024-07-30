

import CountdownBanner from '@/src/components/banner/CountdownBanner';


export default function HomePageCountDownBanner() {
    return (
        <div className='row d-flex justify-content-center white-background mx-0'>
            <div className='col-10 col-lg-8 col-md-8 col-sm-10'>
                <CountdownBanner title='Hurry! Limited Time Offer' details='Sale Ends in' remainingMinutes={0} />
            </div>
        </div>
    )
}
