import SecondaryPinkButton from "@/src/components/button/SecondaryPinkButton";

export default function ContactForm() {
    return (
        <div className=" w-100">
            <div className="pink-color font-size-1500  text-start mb-3">Contact Us</div>
            <input className='p-1 purchase-message w-100 mb-3' type="text" placeholder="Your name"></input>
            <input className='p-1 purchase-message w-100 mb-3' type="text" placeholder="Email Address"></input>
            <input className='p-1 purchase-message w-100 mb-3' type="text" placeholder="Mobile"></input>
            <input className='p-1 purchase-message long-input w-100 mb-3' type="text" placeholder="Mobile"></input>
            <SecondaryPinkButton buttonClassName='justify-content-center w-100 mb-5' text='Send message' />

        </div>
    )
}
