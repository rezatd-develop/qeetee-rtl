import SecondaryPinkButton from "../button/SecondaryPinkButton";

export default function CouponCode() {
    return (
        <div className="row mx-0 d-flex justify-content-center mb-5">
            <div className="col-12 col-lg-8 col-md-10 col-sm-12 row mx-0 flex-column">
                <p className='mb-1 info-color fw-lighter font-size-750 col-6'>ADD COUPON CODE</p>
                <div className="d-flex col-12 col-lg-6 col-md-8 col-sm-12">
                    <input className='p-1 w-75' type="text" placeholder="*****"></input>
                    <SecondaryPinkButton buttonClassName='justify-content-center' text='ADD CODE ' />
                </div>
            </div>
        </div>
    )
}
