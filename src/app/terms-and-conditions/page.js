import PublicLayout from "@/src/layouts/PublicLayout";
import '../../files/styles/view/singlePages/contactUs/singlePages.scss';

import bannerImage from '../../files/images/banners/banner-cut.png';
import TitleBanner from "@/src/components/banner/TitleBanner";
import TermsContainer from "@/src/view/singlePages/terms/TermsContainer";

export default function TermsAndConditions() {
    return (
        <PublicLayout>
            <TitleBanner img={bannerImage} title='Terms and Conditions' />
            <TermsContainer />
        </PublicLayout>
    )
}
