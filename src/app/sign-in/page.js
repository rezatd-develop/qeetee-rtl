import SigningLayout from "@/src/layouts/SigningLayout";
import SignInDetails from "@/src/view/signing/SignInDetails";
import '../../files/styles/view/signing/signing.scss';

export default function SignIn() {
    return (
        <SigningLayout>
            <SignInDetails />
        </SigningLayout>)
}
