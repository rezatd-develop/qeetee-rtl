import SigningLayout from "@/src/layouts/SigningLayout";
import ForgotPasswordDetails from "@/src/view/signing/ForgotPasswordDetails";
import '../../files/styles/view/signing/signing.scss';

export default function ForgotPassword() {
  return (
    <SigningLayout>
            <ForgotPasswordDetails />
        </SigningLayout>
  )
}
