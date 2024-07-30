import SigningLayout from '@/src/layouts/SigningBannerLayout'
import SignUpForm from './SignUpForm'
import SigningBannerLayout from '@/src/layouts/SigningBannerLayout'
import SignInMethods from './SignInMethods'

export default function SignUpDetails() {
    return (
        <div className='d-flex justify-content-center align-items-center w-100'>
            <SigningBannerLayout>
                <SignUpForm />
                <SignInMethods />
            </SigningBannerLayout>
        </div>
    )
}
