'use client'

import clsx from "clsx";
import { Col, Row } from "reactstrap";

import AdminSidebar from "../view/admin/sidebar/AdminSidebar";
import { useState } from "react";

export default function AdminLayout({ children }) {
    const [adminSidebarCollapsed, setAdminSidebarCollapsed] = useState(false);

    const adminSidebarCollapseChanged = (isCollapse) => setAdminSidebarCollapsed(isCollapse);

    return (
        <div dir="ltr">
            <Row className="m-0">
                <Col className={clsx(adminSidebarCollapsed && "position-absolute", "p-0")} md={adminSidebarCollapsed ? 0 : 3}>
                    < AdminSidebar isCollapsed={adminSidebarCollapseChanged} />
                </Col>
                <Col className="p-0" md={adminSidebarCollapsed ? 12 : 9}>
                    {children}
                </Col>
            </Row>
        </div >
    )
}