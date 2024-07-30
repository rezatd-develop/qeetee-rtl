'use client'

import clsx from "clsx"

export default function ProductTabs({activeTab, tabChanged }) {
    return (
        <div className="border-bottom d-flex justify-content-between w-100">
            <div className={clsx(activeTab === 1 && 'border-bottom-pink pink-color pb-2', "font-size-875 info-color")} onClick={() => tabChanged(1)}>Description</div>
            <div className={clsx(activeTab === 2 && 'border-bottom-pink pink-color pb-2', "font-size-875 info-color")} onClick={() => tabChanged(2)}>Shipping & Return</div>
            <div className={clsx(activeTab === 3 && 'border-bottom-pink pink-color pb-2', "font-size-875 info-color")} onClick={() => tabChanged(3)}>Product Reviews (6)</div>
        </div>
    )
}
