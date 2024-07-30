import clsx from 'clsx'
import Image from 'next/image'

export default function FlatButton({ buttonClassName, icon, text, iconSize }) {
    return (
        <div className='d-flex'>
            <button className={clsx(buttonClassName, 'd-flex align-items-center py-2 px-4 font-size-750')} type="button">
                {!!icon && <Image className='me-3' width={iconSize || 13} src={icon} />}
                <span className='py-1'>{text}</span>
            </button>
        </div>
    )
}
