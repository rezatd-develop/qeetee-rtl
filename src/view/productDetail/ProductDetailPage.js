'use client'
import { useState } from "react";

import ImageGallery from "@/src/components/imageGallery/ImageGallery";
import ProductConfiguration from "./ProductConfiguration";
import ProductTabs from "./ProductTabs";
import PlainTab from "@/src/components/tab/PlainTab";
import Reviews from "./Reviews";
import '../../files/styles/view/productDetail/productDetail.scss';
import LeaveProductReview from "./LeaveProductReview";

export default function ProductDetailPage() {
    const [selectedTab, setSelectedTab] = useState(1);

    const tabChanged = (data) => setSelectedTab(data)

    return (
        <div className="row mx-0 justify-content-center align-items-center">
            <div className="col-12 col-lg-9 col-md-12 col-sm-12 my-4 d-flex justify-content-center row mx-0 flex-wrap">
                <div className="col-12 col-lg-6 col-md-6 col-sm-12 my-2">
                    <ImageGallery />
                </div>
                <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                    <ProductConfiguration />
                </div>
            </div>
            <div className="row mx-0 col-12 col-lg-9 col-md-12 col-sm-12 my-4 f-flex justify-content-between">
                <div className="col-12 col-lg-6 col-md-6 col-sm-10 ms-0 ms-lg-0 ms-md-2 ms-sm-0 mb-4">
                    <ProductTabs activeTab={selectedTab} tabChanged={tabChanged} />
                    {selectedTab === 1 || selectedTab === 2 ? <PlainTab /> : <Reviews />}
                </div>
                <div className="col-12 col-lg-6 col-md-6 col-sm-10 ms-lg-0 ms-md-2 ms-sm-0 light-gray-background px-4 py-3">
                    <LeaveProductReview />
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}
