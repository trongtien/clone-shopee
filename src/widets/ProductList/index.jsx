import PropTypes from 'prop-types';
import Product from "~/components/product";

export default function ProductList({products}) {
    return (
        <div className="mt-5 grid grid-cols-5 gap-5">
            {
                products.map(
                    data => <Product key={data.id} item={data}/>
                )
            }
        </div>
    )
}

ProductList.propTypes = {
    products: PropTypes.array
}

ProductList.defaultProps = {
    products: []
}