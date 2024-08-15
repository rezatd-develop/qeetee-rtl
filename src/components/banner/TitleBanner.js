
export default function TitleBanner({ img, title }) {
    return (
        <div className="title-banner mt-2 mb-5 row mx-0 d-flex justify-content-center align-items-center" style={{ backgroundImage: `url(${img.src})` }}>
            <div className="col-12 col-lg-9 col-md-10 col-sm-12">
                <p className="mb-0 font-size-2000 white-color yekan-bakh-fat-font">{title}</p>
            </div>
        </div>
    )
}
