

import PrimaryHero from '@/src/components/Hero/PrimaryHero';
import bannerImg from '../../files/images/banners/product-banner.png'

export default function ProductsPageHeroBanner() {
    return (
        <PrimaryHero bannerImage={bannerImg}
            title=<>جدیدترین محصولات <br /> شیک بست <br /> را از دست ندهید.</>
            detail=<>همیشه میتوانید جدید ترین محصولات را در این صحفه ببینید.</> />
    )
}
