import clsx from "clsx";
import Image from "next/image";

export default function InputWithIcon({ inputClassName, icon, iconSize, placeholder }) {
    return (
        <div className={clsx("d-flex", inputClassName)}>
            <Image src={icon} width={iconSize} className="icon-border p-2" />
            <input className='w-100 p-1 input-border' type="text" placeholder={placeholder}></input>
        </div>
    )
}
