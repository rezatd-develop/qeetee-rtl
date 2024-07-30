'use client'

import mailIcon from '../../files/images/icons/mail-01.png';
import SecondaryPinkButton from "@/src/components/button/SecondaryPinkButton";
import InputWithIcon from '@/src/components/inputs/InputWithIcon';
import { useState } from "react";


export default function ForgotPasswordForm() {
    const [otpStep, setOtpStep] = useState(1);
    return (
        <div className="w-100">
            <p className="pink-color font-size-1125  text-center">
                {otpStep === 1 ? 'Forgot Password' : 'Enter OPT Code'}
            </p>
            <InputWithIcon inputClassName='mb-3' icon={mailIcon} iconSize={35} placeholder={otpStep === 1 ? 'Email' : 'Enter OTP'} />
            <SecondaryPinkButton buttonClassName='w-100 justify-content-center' text={otpStep === 1 ? 'Submit' : 'Verify OTP'} />
        </div>
    )
}
