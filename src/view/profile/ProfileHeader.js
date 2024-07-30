import FlatButton from "@/src/components/button/FlatButton";

export default function ProfileHeader() {
    return (
        <div className="row mx-0 justify-content-center">
            <div className="col-12 col-lg-9 col-md-10 col-sm-12 my-5">
                <div className="d-flex justify-content-between my-5">
                    <div className="prompt-font font-size-1125 fw-bold">Jeremy Rose</div>
                    <FlatButton buttonClassName='white-color pink-border pink-background px-5 prompt-font fw-bold mx-2 prompt-font' text='EDIT PROFILES' />
                </div>
            </div>
        </div>
    )
}
