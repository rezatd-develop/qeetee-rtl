import clsx from 'clsx'
import Image from 'next/image'


export default function OutlineButton({ buttonClassName, icon, iconSize, text }) {
    return (
        <div className='d-flex'>
            <button className={clsx(buttonClassName, 'd-flex align-items-center white-background pink-color py-2 px-3 font-size-750 pink-border-bottom prompt-font')} type="button">
                {!!icon && <Image className='me-3' width={iconSize || 13} src={icon} />}
                {text}
            </button>
        </div>
    )
}
