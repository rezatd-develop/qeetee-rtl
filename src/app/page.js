import 'bootstrap/dist/css/bootstrap.css';

import PublicLayout from '@/src/layouts/PublicLayout';
import HomePageBlogs from '@/src/view/Home/HomePageBlogs';
import HomePageCommercialVideo from '@/src/view/Home/HomePageCommercialVideo';
import HomePageCountDownBanner from '@/src/view/Home/HomePageCountDownBanner';
import HomePageFaq from '@/src/view/Home/HomePageFaq';
import HomePageHeroBanner from '@/src/view/Home/HomePageHeroBanner';
import HomePageOfferProducts from '@/src/view/Home/HomePageOfferProducts';
import HomePageProducts from '@/src/view/Home/HomePageProducts';
import '../files/styles/common.scss';



export default function Home() {
  return (
    <PublicLayout>
      <HomePageHeroBanner />
      <HomePageCountDownBanner />
      <HomePageProducts />
      <HomePageCommercialVideo />
      <HomePageOfferProducts />
      <HomePageBlogs />
      <HomePageFaq />
    </PublicLayout>
  );
}
