

import CountdownBanner from '@/src/components/banner/CountdownBanner';


export default function HomePageCountDownBanner() {
    return (
        <div className='row d-flex justify-content-center white-background mx-0'>
            <div className='col-10 col-lg-8 col-md-8 col-sm-10'>
                <CountdownBanner title='آفر ویژه امروز رو از دست ندهید' details='فقط تا چهارشنبه' remainingMinutes={56508} />
            </div>
        </div>
    )
}
