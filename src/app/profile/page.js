'use client'

import { useState } from "react";

import PublicLayout from "@/src/layouts/PublicLayout";
import ProfileHeader from "@/src/view/profile/ProfileHeader";
import ProfileTabs from "@/src/view/profile/ProfileTabs";
import ProfileDetails from "@/src/view/profile/ProfileDetails";

export default function Profile() {
    const [selectedTab, setSelectedTab] = useState(1);
    const tabChanged = (data) => setSelectedTab(data);

    return (
        <PublicLayout>
            <ProfileHeader />
            <div className="row mx-0 d-flex justify-content-center">
                <div className="col-12 col-lg-9 col-md-10 col-sm-12 d-flex justify-content-start row mx-0">
                    <div className="col-12 col-lg-6 col-md-8 col-sm-12">
                        <ProfileTabs activeTab={selectedTab} tabChanged={tabChanged} />
                    </div>
                    <ProfileDetails />
                </div>
            </div>
        </PublicLayout>
    )
}
