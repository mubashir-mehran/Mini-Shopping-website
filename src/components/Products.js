import React, { useEffect } from 'react'
import { add } from '../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';

const Products = () => {
    const dispatch = useDispatch();
    const {data: products, status} = useSelector(state => state.product);
    // const [products, setProducts] = React.useState([]);
    useEffect(() => {

        dispatch(fetchProducts());
        // const fetchProducts = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products')
        //     const data = await res.json();
        //     console.log(data);
        //     setProducts(data);
        // }
        // fetchProducts();
    }, []);

    const handleAdd = (product) => {
        dispatch(add(product));

    }
     
    if (status === STATUSES.LOADING) {
        return <h3>Loading...</h3>
    }
    if (status === STATUSES.ERROR) {
        return <h3>Something went wrong...!</h3>
    }
    return (
        <div className='productwrapper'>
            {

                products.map(product => (
                    <div className='card' key={product.id}>
                        <img src={product.image} alt='' />
                        <h4>{product.title}</h4>
                        <h5>{product.price}</h5>
                        <button onClick={() => handleAdd(product)} className='btn'>Add to cart</button>
                    </div>
                ))
            }

        </div>
    )
}

export default Products
