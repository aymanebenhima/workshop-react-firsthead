import Cart from './Cart';

const ItemList = ({ products }) => {
    const alertProduct = (productName) => {
        alert(`You clicked on ${productName}`);
    };

    return (
        <div className='d-flex flex-wrap justify-content-center'>
            {products.map((product) => (
                <Cart
                    key={product.id}
                    product={product}
                    alertProduct={alertProduct}
                />
            ))}
        </div>
    )
}

export default ItemList;