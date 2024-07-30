

import PrimaryHero from '@/src/components/Hero/PrimaryHero';
import bannerImg from '../../files/images/banners/product-banner.png'

export default function ProductsPageHeroBanner() {
    return (
        <PrimaryHero bannerImage={bannerImg}
            title=<>All <br />Product</>
            detail=<>Discover Your Perfect Beauty Essentials and <br /> Unleash Your Inner Radiance!</> />
    )
}
