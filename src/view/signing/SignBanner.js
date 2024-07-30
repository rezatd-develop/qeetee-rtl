import signInBanner from '../../files/images/banners/signInBanner.png';

export default function SignBanner() {
    return (
        <div className='signing-banner d-flex justify-content-center align-items-center flex-column' style={{ backgroundImage: `url(${signInBanner.src})` }} >
            <div className='font-size-2750 white-color fw-bold lh-sm'>Welcome to<br></br> Qeetee Shop</div>
            <div className='font-size-875 white-color  mx-5 mt-3'>Discover Your Perfect Beauty Essentials <br></br> and Unleash Your Inner Radiance!</div>
        </div>
    )
}
