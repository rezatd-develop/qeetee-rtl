'use client'

import { useDispatch } from 'react-redux';
import redHoodie from '../../files/images/products/red_hoodie.png';
import ProductCard from '@/src/components/card/ProductCard';
import { useRouter } from 'next/navigation';

export default function ProductsPageProducts() {

    const dispatch = useDispatch();
    const router = useRouter();

    const productClicked = (id) => {
        dispatch(setPageNameType(id));
        router.push('/products/123')
    }

    return (
        <div className='white-background row mx-0 d-flex justify-content-center '>
        <div className='col-10 col-lg-8 col-md-8 col-sm-10'>
            <p className='font-size-1500 fw-bold mb-5 yekan-bakh-fat-font'>محصولات ویژه امروز</p>
            <div className='d-flex justify-content-center flex-wrap row mx-0'>
                <ProductCard onClick={() => productClicked(enumerations.pageNameTypes.productDetails)} cardClassName={'col-12 col-lg-3 col-md-4 col-sm-12'}
                    img={redHoodie} slogan='Free Size' title='تیشرت نخ پنبه آدیداس' price='520,000' />
                <ProductCard onClick={() => productClicked(enumerations.pageNameTypes.productDetails)} cardClassName={'col-12 col-lg-3 col-md-4 col-sm-12'}
                    img={redHoodie} slogan='Free Size' title='تیشرت نخ پنبه آدیداس' price='520,000' />
                <ProductCard onClick={() => productClicked(enumerations.pageNameTypes.productDetails)} cardClassName={'col-12 col-lg-3 col-md-4 col-sm-12'}
                    img={redHoodie} slogan='Free Size' title='تیشرت نخ پنبه آدیداس' price='520,000' />
                <ProductCard onClick={() => productClicked(enumerations.pageNameTypes.productDetails)} cardClassName={'col-12 col-lg-3 col-md-4 col-sm-12'}
                    img={redHoodie} slogan='Free Size' title='تیشرت نخ پنبه آدیداس' price='520,000' />
                <ProductCard onClick={() => productClicked(enumerations.pageNameTypes.productDetails)} cardClassName={'col-12 col-lg-3 col-md-4 col-sm-12'}
                    img={redHoodie} slogan='Free Size' title='تیشرت نخ پنبه آدیداس' price='520,000' />
                <ProductCard onClick={() => productClicked(enumerations.pageNameTypes.productDetails)} cardClassName={'col-12 col-lg-3 col-md-4 col-sm-12'}
                    img={redHoodie} slogan='Free Size' title='تیشرت نخ پنبه آدیداس' price='520,000' />
                <ProductCard onClick={() => productClicked(enumerations.pageNameTypes.productDetails)} cardClassName={'col-12 col-lg-3 col-md-4 col-sm-12'}
                    img={redHoodie} slogan='Free Size' title='تیشرت نخ پنبه آدیداس' price='520,000' />
                <ProductCard onClick={() => productClicked(enumerations.pageNameTypes.productDetails)} cardClassName={'col-12 col-lg-3 col-md-4 col-sm-12'}
                    img={redHoodie} slogan='Free Size' title='تیشرت نخ پنبه آدیداس' price='520,000' />
            </div>
        </div>
    </div>)
}
