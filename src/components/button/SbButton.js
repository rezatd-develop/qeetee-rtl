import { Button } from '@mui/material'
import clsx from 'clsx'
import Image from 'next/image'


export default function SbButton({ variant, startIcon, className, endIcon, onClick, children, labelClassName }) {
    return (
        <Button variant={variant}
            startIcon={startIcon}
            endIcon={endIcon}
            onClick={onClick}
            className={clsx('yekan-bakh-font', className)}>
            <span className={clsx(labelClassName, 'mx-2')}>{children}</span>
        </Button>
    )
}
