import TitleBanner from "@/src/components/banner/TitleBanner";
import PublicLayout from "@/src/layouts/PublicLayout";
import '../../files/styles/view/singlePages/contactUs/singlePages.scss';

import bannerImage from '../../files/images/banners/banner-cut.png';
import ContactForm from "@/src/view/singlePages/ContactUs/ContactForm";

export default function ContactUs() {
    return (
        <PublicLayout>
            <TitleBanner img={bannerImage} title='با ما در تماس باشید' />
            <div className="row mx-0 d-flex justify-content-center">
                <div className="col-12 col-lg-9 col-md-10 col-sm-12 row mx-0">
                    <div className="col-12 col-lg-6 col-md-6 col-sm-6 d-flex justify-content-center">
                        <ContactForm />
                    </div>
                    <div className="col-12 col-lg-6 col-md-6 col-sm-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2353.2248948936913!2d8.64561595704204!3d50.12537605691132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd096f477096c5%3A0x422435029b0c600!2sFrankfurt%2C%20Germany!5e0!3m2!1sen!2snl!4v1711022543987!5m2!1sen!2snl" className="w-100" height="220" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <div className="d-flex justify-content-between py-4">
                            <div className="font-size-750 light-text-color">آدرس</div>
                            <div className="font-size-750 light-text-color">تهران، فاطمی، روبه روی وزارت کشور</div>
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    )
}
