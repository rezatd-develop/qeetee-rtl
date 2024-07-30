import PublicImports from "../components/publicImports/PublicImports";
import SignBanner from "../view/signing/SignBanner";

export default function SigningLayout({ children }) {
    return (
        <PublicImports>
            <div className="row mx-0 d-flex flex-row">
                <div className="col-12 col-lg-6 col-md-6 col-sm-12 px-0">
                    <SignBanner />
                </div>
                <div className="col-12 col-lg-6 col-md-6 col-sm-12 px-0 d-flex justify-content-center align-items-center my-4 px-5 px-lg-0 px-md-2 px-sm-5">
                    {children}
                </div>
            </div>
        </PublicImports>)
}
