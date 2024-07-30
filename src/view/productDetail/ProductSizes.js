import ProductSizeItem from "./ProductSizeItem"

export default function ProductSizes() {
    const testSizes = [{ id: 1, label: 'S' }, { id: 2, label: 'M' }, { id: 3, label: 'L' }, { id: 4, label: 'XL' },]

    const styles= {
        deActive: 'deactive-background info-color border',
        notSelected: 'white-background border', 
        selected: 'white-color pink-background border'
    }
    return (
        <div className="d-flex ">
            {testSizes.map((item, index) => <ProductSizeItem key={index} itemClassName={styles.notSelected} size={item} />)}
        </div>
    )
}
