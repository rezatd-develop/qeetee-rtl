

import blogImg from '../../files/images/blogs/blog_image.png'
import BlogCard from '@/src/components/card/BlogCard';

export default function HomePageBlogs() {
    return (
        <div className='row mx-0 white-background d-flex justify-content-center pt-4 pb-5'>
            <div className='d-flex flex-column justify-content-center align-items-center align-items-center pt-4 col-12 col-lg-8 col-md-10 col-sm-12'>
                <p className='font-size-1500 fw-bold text-center yekan-bakh-fat-font'>چی رو با چی ست کنیم ...!!</p>
                <div className='d-flex justify-content-center row mx-0 mt-2'>
                    <BlogCard cardClassName='col-12 col-lg-4 col-md-6 col-sm-12 mb-4' img={blogImg} category='دسته بندی' author='رکسانا حبیبی' date='15 اردبهشت 1403' title='5 استایل تابستونی برای دورهمی های دوستانه' />
                    <BlogCard cardClassName='col-12 col-lg-4 col-md-6 col-sm-12 mb-4' img={blogImg} category='دسته بندی' author='رکسانا حبیبی' date='15 اردبهشت 1403' title='5 استایل تابستونی برای دورهمی های دوستانه' />
                    <BlogCard cardClassName='col-12 col-lg-4 col-md-6 col-sm-12 mb-4' img={blogImg} category='دسته بندی' author='رکسانا حبیبی' date='15 اردبهشت 1403' title='5 استایل تابستونی برای دورهمی های دوستانه' />
                </div>
            </div>
        </div>
    )
}
