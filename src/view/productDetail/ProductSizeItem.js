import clsx from 'clsx';

export default function ProductSizeItem({ key, size, itemClassName }) {
  return (
    <div key={key} className={clsx(itemClassName, "me-2 font-size-750 size-item d-flex justify-content-center align-items-center")}>{size.label}</div>
  )
}
