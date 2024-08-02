'use client'

import PrimaryHero from '@/src/components/Hero/PrimaryHero';
import bannerImage from '../../files/images/banners/main-page-shopping-benner.png';
import enumerations from '@/src/constants/enumerations/enumerations';
import { setPageNameType } from '@/src/app/GlobalRedux/Features/pageDetails/pageDetailsSlice';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

export default function HomePageHeroBanner() {

    const router = useRouter();
    const dispatch = useDispatch();

    const buttonClicked = (id) => {
        dispatch(setPageNameType(id));
        router.push('/products')
    };

    return (
        <PrimaryHero bannerImage={bannerImage}
            title=<>شما لایق بهترین <br /> هارمونی ها هستید ...!!</>
            detail=<>نگران سایز نبودن لباس یا رنگ اون هستید؟ <br /> پس شبیه ساز انحصاری SHIK BEST رو از دست ندید.</>
            buttonText='من رو به شبیه ساز ببر!!'
            onClick={() => buttonClicked(enumerations.pageNameTypes.products)} />
    )
}
