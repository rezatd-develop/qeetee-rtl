import Image from "next/image";
import mailIcon from '../../files/images/icons/mail-01.png';
import lockIcon from '../../files/images/icons/lock-02.png';
import SecondaryPinkButton from "@/src/components/button/SecondaryPinkButton";
import InputWithIcon from "@/src/components/inputs/InputWithIcon";

export default function SignUpForm() {
    return (
        <div className="w-100">
            <p className="pink-color font-size-1125  text-center">ثبت نام</p>
            <input className='w-100 p-1 purchase-message mb-3' type="text" placeholder="نام کامل"></input>
            <InputWithIcon inputClassName='mb-3' icon={mailIcon} iconSize={35} placeholder='ایمیل' />
            <InputWithIcon inputClassName='mb-3' icon={lockIcon} iconSize={35} placeholder='رمز' />
            <InputWithIcon inputClassName='mb-3' icon={lockIcon} iconSize={35} placeholder='رمز را دوباره وارد کنید' />
            <SecondaryPinkButton buttonClassName='w-100 justify-content-center' text='ثبت نام'/>
        </div>
    )
}
