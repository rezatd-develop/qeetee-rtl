'use client'

import Link from 'next/link';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

import '../../../files/styles/view/admin/Admin.scss';

export default function AdminSidebar() {
    const [isAdminSidebarCollapsed, setIsAdminSidebarCollapsed] = useState(false);

    const toggleAdminSidebar = () => setIsAdminSidebarCollapsed(!isAdminSidebarCollapsed);

    return (
        isAdminSidebarCollapsed
            ?
            <div onClick={toggleAdminSidebar} className='p-3 m-3 rounded bg-dark expanded-admin-sidebar cursor-pointer'>
                <MenuIcon className='white-color' />
            </div>
            :
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark admin-sidebar">
                <div className='mt-2 d-flex justify-content-between cursor-pointer' >
                    <div className='font-size-1125'>Shikbest Control Center</div>
                    <MenuIcon onClick={toggleAdminSidebar} />
                </div>

                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link href='/admin/products' className="nav-link active">
                            <svg className="bi me-2" width="16" height="16"></svg>
                            Products
                        </Link>
                    </li>
                </ul>
            </div >
    )
}