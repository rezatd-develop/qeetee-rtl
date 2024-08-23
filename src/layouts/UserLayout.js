import Footer from "../view/footer/Footer";
import Header from "../view/header/Header";

export default function UserLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}