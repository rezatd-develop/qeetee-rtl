'use client'

import Image from "next/image";
import bannerImg from '../files/images/company/logo-large.png';
import enumerations from "../constants/enumerations/enumerations";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setPageNameType } from "../app/GlobalRedux/Features/pageDetails/pageDetailsSlice";

export default function SigningBannerLayout({ children }) {

    const dispatch = useDispatch();
    const router = useRouter();

    const logoClicked = (id) => {
        dispatch(setPageNameType(id));
        router.push('/')
    }

    return (
        <div className="d-flex justify-content-center align-items-center flex-column col-10 col-lg-8 col-md-10 col-sm-12">
            <Image onClick={() => logoClicked(enumerations.pageNameTypes.home)} width={170} src={bannerImg} className="mb-4" />
            <p className="font-size-750 light-text-color text-center prompt-font">
                Discover Your Perfect Beauty Essentials and Unleash Your <br></br> Inner Radiance!
            </p>
            {children}
        </div>
    )
}
