import clsx from 'clsx';

export default function ProductSizeItem({ size, itemClassName }) {
  return (
    <div key={size.id} className={clsx(itemClassName, "me-2 font-size-750 size-item d-flex justify-content-center align-items-center")}>{size.label}</div>
  )
}
