import SigningLayout from "@/src/layouts/SigningLayout";
import SetPasswordDetails from "@/src/view/signing/SetPasswordDetails";
import '../../files/styles/view/signing/signing.scss';

export default function SetPassword() {
    return (
        <SigningLayout>
            <SetPasswordDetails />
        </SigningLayout>    )
}
