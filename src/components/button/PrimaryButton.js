import clsx from 'clsx';
import Image from 'next/image';


export default function PrimaryButton({ key, onClick, icon, iconSize, text, buttonClassName, textClassName }) {
    return (
        <button key={key} onClick={onClick} type="button" className={clsx('transparent-background text-nowrap', buttonClassName)}>
            {!!icon && <Image className='mx-2' width={iconSize || 18} src={icon} />}
            <span className={textClassName}>{text}</span>
        </button>
    )
}
