'use client'

import clsx from "clsx"

export default function ProductTabs({ activeTab, tabChanged }) {
    return (
        <div className="border-bottom d-flex justify-content-between">
            <div className={clsx('cursor-pointer', activeTab === 1 && 'border-bottom-pink pink-color pb-2', "font-size-875 info-color")} onClick={() => tabChanged(1)}>توضیحات</div>
            <div className={clsx('cursor-pointer', activeTab === 2 && 'border-bottom-pink pink-color pb-2', "font-size-875 info-color")} onClick={() => tabChanged(2)}>ارسال و مرجوعی</div>
            <div className={clsx('cursor-pointer', activeTab === 3 && 'border-bottom-pink pink-color pb-2', "font-size-875 info-color")} onClick={() => tabChanged(3)}>نظرات محصول</div>
        </div>
    )
}
