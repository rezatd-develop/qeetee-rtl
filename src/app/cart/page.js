import PublicLayout from "@/src/layouts/PublicLayout";
import CarPageTable from "@/src/view/cart/CarPageTable";
import CartPageHeader from "@/src/view/cart/CartPageHeader";
import CouponCode from "@/src/components/inputs/CouponCode";
import '../../files/styles/view/cart/cart.scss';
import ShippingAndInvoice from "@/src/view/cart/ShippingAndInvoice";

export default function Cart() {
    return (
        <PublicLayout>
            <CartPageHeader />
            <CarPageTable />
            <CouponCode />
            <ShippingAndInvoice />
        </PublicLayout>
    )
}
