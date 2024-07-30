import SigningBannerLayout from "@/src/layouts/SigningBannerLayout";
import SetPasswordForm from "./SetPasswordForm";

export default function SetPasswordDetails() {
    return (
        <div className='d-flex justify-content-center align-items-center w-100'>
            <SigningBannerLayout>
                <SetPasswordForm />
            </SigningBannerLayout>
        </div>
    )
}
