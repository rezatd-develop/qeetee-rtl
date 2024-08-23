import { Col, Row } from "reactstrap";

import AdminSidebar from "../view/admin/sidebar/AdminSidebar";

export default function AdminLayout({ children }) {
    return (
        <div dir="ltr">
            <Row className="m-0">
                <Col className="p-0" md={3}>
                    <AdminSidebar />
                </Col>
                <Col className="p-0">
                    <div className="bg-dark white-color">content</div>
                    {children}
                </Col>
            </Row>
        </div>
    )
}