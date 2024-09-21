import PublicLayout from "@/src/layouts/PublicLayout";
import AdminProducts from "./products/page";

export default function admin() {
    return (
        <PublicLayout admin>
            <AdminProducts />
        </PublicLayout>
    )
}