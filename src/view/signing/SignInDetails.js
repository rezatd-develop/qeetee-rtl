import SigningBannerLayout from "@/src/layouts/SigningBannerLayout";
import SignInForm from "./SignInForm";
import SignInMethods from "./SignInMethods";

export default function SignInDetails() {
  return (
    <div className='d-flex justify-content-center align-items-center w-100'>
      <SigningBannerLayout>
        <SignInForm />
        <SignInMethods />
      </SigningBannerLayout>
    </div>
  )
}
