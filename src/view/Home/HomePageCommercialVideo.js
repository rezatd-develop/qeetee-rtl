

import commercialImg from '../../files/images/company/commercial_video.png';

export default function HomePageCommercialVideo() {
    return (
        <div className='row mx-0 white-background d-flex justify-content-center py-5'>
            <div className='col-11 col-lg-8 col-md-8 col-sm-11 d-flex justify-content-center align-items-center flex-column'>
                <div>
                    <span className='font-size-1500 mb-4'>DISCOVER THE SECRETS OF GOOD SHIRT</span>
                </div>
                <img className='rounded w-100 mt-2' src={commercialImg.src} />
            </div>
        </div>
    )
}
