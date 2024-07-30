import 'bootstrap/dist/css/bootstrap.css';

import Header from '@/src/view/header/Header';
import Footer from '@/src/view/footer/Footer';
import '../files/styles/common.scss';



export default function PublicLayout({ children }) {
    return (
        <div className="white-background">
            <Header />
            {children}
            <Footer />
        </div>
    );
}
