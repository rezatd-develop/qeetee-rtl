import SecondaryPinkButton from "@/src/components/button/SecondaryPinkButton";
import profileIcon from '../../files/images/icons/profile-ICON.png';
import InputWithIcon from "@/src/components/inputs/InputWithIcon";


export default function SetPasswordForm() {
    return (
        <div className="w-100">
            <p className="pink-color font-size-1125  text-center">فراموشی رمز</p>
            <input className='w-100 p-1 purchase-message mb-3' type="text" placeholder="رمز جدید را وارد کنید"></input>
            <InputWithIcon inputClassName='mb-3' icon={profileIcon} iconSize={35} placeholder='رمز' />
            <SecondaryPinkButton buttonClassName='w-100 justify-content-center' text='ذخیره رمز' />
        </div>
    )
}
