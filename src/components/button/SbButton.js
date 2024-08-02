import { Button } from '@mui/material'
import clsx from 'clsx'
import Image from 'next/image'


export default function SbButton({ variant, startIcon, className, endIcon, children }) {
    return (
        <Button variant={variant}
            startIcon={startIcon}
            endIcon={endIcon}
            className={clsx('yekan-bakh-font', className)}>
            <span className='mx-2'>{children}</span>
        </Button>
    )
}
