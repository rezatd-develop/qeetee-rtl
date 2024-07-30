import PublicLayout from '@/src/layouts/PublicLayout';
import ProductsPageHeroBanner from '@/src/view/products/ProductsPageHeroBanner';
import ProductsPageProducts from '@/src/view/products/ProductsPageProducts';

export default function Products() {
    return (
        <PublicLayout>
            <ProductsPageHeroBanner />
            <ProductsPageProducts />
        </PublicLayout>

    )
}
