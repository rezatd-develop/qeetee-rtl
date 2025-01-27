import Image from "next/image";
import searchIcon from '../../../files/images/icons/search.png';
import TermItem from "./TermItem";
// import OutlineButton from "@/src/components/button/OutlineButton";
import FlatButton from "@/src/components/button/FlatButton";

export default function TermsContainer() {
    return (
        <div className="row mx-0 d-flex justify-content-center">
            <div className="col-12 col-lg-9 col-md-10 col-sm-12 justify-content-center">
                <div className="d-flex justify-content-between mb-4">
                    <div className="font-size-1125 pink-color ">Terms and Conditions</div>
                    <div>
                        <Image src={searchIcon} />
                    </div>
                </div>
                <div className="terms-container mb-5">
                Comming Soon ...
                    {/* <TermItem />
                    <TermItem />
                    <TermItem />
                    <TermItem />
                    <TermItem />
                    <TermItem /> */}
                </div>
                <div className="d-flex justify-content-center mb-5">
                {/* <FlatButton buttonClassName='pink-color pink-border white-background px-5  fw-bold mx-2' text='DECLINE' />
                <FlatButton buttonClassName='white-color pink-border pink-background px-5  fw-bold mx-2' text='ACCEPT THE TERMS' /> */}
                </div>
            </div>
        </div>
    )
}
