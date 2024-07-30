'use client'

import Image from "next/image";
import divider from '../../files/images/elements/horizontal-divider.png';
import CircleButton from "@/src/components/button/CircleButton";

import google from '../../files/images/icons/google.png';
import facebook from '../../files/images/icons/facebook.png';
import apple from '../../files/images/icons/apple.png';
import enumerations from "@/src/constants/enumerations/enumerations";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { setPageNameType } from "@/src/app/GlobalRedux/Features/pageDetails/pageDetailsSlice";

export default function SignInMethods() {

    const dispatch = useDispatch();
    const pageNameType = useSelector((state) => state.pageDetails.pageNameType);
    const router = useRouter();

    const buttonClicked = (id) => {
        switch (id) {
            case enumerations.pageNameTypes.signing:
                {
                    router.push('/sign-up');
                    dispatch(setPageNameType(enumerations.pageNameTypes.signUp))
                }
                break;
            case enumerations.pageNameTypes.signUp:
                {
                    router.push('/sign-in');
                    dispatch(setPageNameType(enumerations.pageNameTypes.signing))
                }
                break;
            default:
                break;
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
            <div className="d-flex justify-content-center align-items-center mt-4">
                <Image className="mx-2" width={120} src={divider} />
                <span className="light-text-color font-size-750">OR</span>
                <Image className="mx-2" width={120} src={divider} />
            </div>
            <div className="d-flex justify-content-center mt-4">
                <CircleButton>
                    <Image width={26} src={google} />
                </CircleButton>
                <CircleButton>
                    <Image width={26} src={facebook} />
                </CircleButton>
                <CircleButton>
                    <Image width={26} src={apple} />
                </CircleButton>
            </div>
            <div className="d-flex justify-content-center align-items-center  mt-3">
                <div className="light-text-color font-size-750  me-2">{pageNameType === enumerations.pageNameTypes.signing ? 'dont have an account?' : 'If an already account?'}</div>
                <div onClick={() => buttonClicked(pageNameType)} className="font-size-875 pink-color ">{pageNameType === enumerations.pageNameTypes.signing ? "sign Up" : "Sign In"}</div>
            </div>
        </div>
    )
}
