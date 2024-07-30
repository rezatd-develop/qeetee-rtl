'use client'

import SecondaryPinkButton from "@/src/components/button/SecondaryPinkButton";
import lockIcon from '../../files/images/icons/lock-02-icon.png';
import profileIcon from '../../files/images/icons/profile-ICON.png';
import InputWithIcon from "@/src/components/inputs/InputWithIcon";
import enumerations from "@/src/constants/enumerations/enumerations";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setPageNameType } from "@/src/app/GlobalRedux/Features/pageDetails/pageDetailsSlice";


export default function SignInForm() {

    const router = useRouter();
    const dispatch = useDispatch();
    const buttonClicked = (id) => {
        dispatch(setPageNameType(id));
        router.push('/forgot-password')
    };

    return (
        <div className="w-100">
            <p className="pink-color font-size-1125 prompt-font text-center">Sign In</p>
            <InputWithIcon inputClassName='mb-3' icon={lockIcon} iconSize={35} placeholder='User Name' />
            <InputWithIcon inputClassName='mb-3' icon={profileIcon} iconSize={35} placeholder='Password' />
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex">
                    <input className="me-2" type="checkbox" value="agreed" />
                    <div className="font-size-875 prompt-font light-text-color">Remember Me</div>
                </div>
                <div onClick={() => buttonClicked(enumerations.pageNameTypes.forgotPassword)} className="font-size-750 prompt-font light-text-color">Forget Password?</div>
            </div>

            <SecondaryPinkButton buttonClassName='w-100 justify-content-center' text='Sign In' />
        </div>)
}
