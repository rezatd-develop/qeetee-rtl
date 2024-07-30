import Image from 'next/image'

import clsx from 'clsx';

export default function SecondaryPinkButton({ onClick, icon, iconSize, text, buttonClassName }) {
    return (
        <div onClick={onClick} className='d-flex'>
            <button className={clsx(buttonClassName, 'd-flex align-items-center pink-background transparent-border-color py-2 px-3 white-color font-size-750 ')} type="button">
                {!!icon && <Image className='me-3' width={iconSize || 13} src={icon} />}
                {text}
            </button>
        </div>
    )
}
