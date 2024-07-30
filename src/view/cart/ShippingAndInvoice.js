import CartInvoice from "./CartInvoice";
import ShippingFeatures from "./ShippingFeatures";

export default function ShippingAndInvoice() {
    return (
        <div className="row mx-0 d-flex justify-content-center ">
            <div className="col-12 col-lg-8 col-md-10 col-sm-12 row mx-0">
                <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                    <ShippingFeatures />
                </div>
                <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                    <CartInvoice />
                </div>
            </div>
        </div>
    )
}
