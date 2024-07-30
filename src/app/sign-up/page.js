import SignUpDetails from "@/src/view/signing/SignUpDetails";
import SigningLayout from "@/src/layouts/SigningLayout";
import '../../files/styles/view/signing/signing.scss';


export default function SignUp() {
    return (
        <SigningLayout>
            <SignUpDetails />
        </SigningLayout>
    )
}
