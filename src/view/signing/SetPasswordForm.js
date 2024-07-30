import SecondaryPinkButton from "@/src/components/button/SecondaryPinkButton";
import profileIcon from '../../files/images/icons/profile-ICON.png';
import InputWithIcon from "@/src/components/inputs/InputWithIcon";


export default function SetPasswordForm() {
    return (
        <div className="w-100">
            <p className="pink-color font-size-1125 prompt-font text-center">Forgot Password</p>
            <input className='w-100 p-1 purchase-message mb-3' type="text" placeholder="Enter New Password"></input>
            <InputWithIcon inputClassName='mb-3' icon={profileIcon} iconSize={35} placeholder='Password' />
            <SecondaryPinkButton buttonClassName='w-100 justify-content-center' text='Save Password' />
        </div>
    )
}
