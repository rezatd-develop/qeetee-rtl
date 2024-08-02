import bannerImage from '../../files/images/banners/model-man.png';
import Countdown from '../countdown/Countdown';

export default function CountdownBanner({ title, details, remainingMinutes }) {
    return (
        <div className='row home-countdown-banner d-flex flex-wrap align-items-center justify-content-center rounded white-background px-0'>
            <div className='col-12 col-lg-6 col-md-12 col-sm-12 px-0'>
                <img className='rounded w-100' src={bannerImage.src} />
            </div>
            <div className='d-flex justify-content-center flex-column col-12 col-lg-6 col-md-12 col-sm-12 mt-3 mt-lg-0 mt-md-3 mt-sm-3'>
                <p className='font-size-1500 mb-1 d-flex justify-content-center text-center yekan-bakh-fat-font'>{title}</p>
                <p className='font-size-750 info-color fw-bold d-flex justify-content-center '>{details}</p>
                <div className='d-flex justify-content-center'><Countdown minutes={remainingMinutes} /></div>
            </div>
        </div>
    )
}
