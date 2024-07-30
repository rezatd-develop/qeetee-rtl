import SigningBannerLayout from "@/src/layouts/SigningBannerLayout";
import ForgotPasswordForm from "./ForgotPasswordForm";

export default function ForgotPasswordDetails() {
    return (
        <div className='d-flex justify-content-center align-items-center w-100'>
            <SigningBannerLayout>
                <ForgotPasswordForm />

            </SigningBannerLayout>
        </div>
    )
}
