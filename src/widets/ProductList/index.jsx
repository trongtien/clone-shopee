import Product from "~/components/product";

export default function ProductList() {
    return (
        <div className="mt-5 grid grid-cols-5 gap-5">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product /> 
        </div>
    )
}