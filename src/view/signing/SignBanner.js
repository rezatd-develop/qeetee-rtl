import signInBanner from '../../files/images/banners/signInBanner.png';

export default function SignBanner() {
    return (
        <div className='signing-banner d-flex justify-content-center align-items-center flex-column' style={{ backgroundImage: `url(${signInBanner.src})` }} >
            <div className='font-size-2750 white-color lh-sm yekan-bakh-fat-font'>به فروشگاه شیک بست<br></br>خوش آمدید</div>
            <div className='font-size-875 white-color  mx-5 mt-3'>شیک بست | تحولی نو در خرید آنلاین</div>
        </div>
    )
}
