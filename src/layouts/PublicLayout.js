import 'bootstrap/dist/css/bootstrap.css';

import AdminLayout from './AdminLayout';
import '../files/styles/common.scss';
import UserLayout from './UserLayout';



export default function PublicLayout({ children, admin }) {
    return (
        <div className="white-background">
            {!admin
                ?
                <UserLayout>
                    {children}
                </UserLayout>
                :
                <AdminLayout>
                    {children}
                </AdminLayout>
            }
        </div>
    );
}
