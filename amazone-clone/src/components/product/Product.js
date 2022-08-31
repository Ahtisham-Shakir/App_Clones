import React from 'react';
import { useStateValue } from '../../StateProvider';
import './Product.css';
import {useNavigate} from 'react-router-dom'

function Product({ id, title, image, price, rating }) {

    const [{user}, dispatch] = useStateValue();

    const navigate = useNavigate();

    // Function To add product into basket
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id, title, image, price, rating
            }
        })
    }

    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {
                        Array(rating).fill().map((_,i) => (
                            <p key={i}>⭐</p>
                        ))
                    }
                </div>
            </div>
            <img src={image} alt='product' />
            <button  onClick={user? addToBasket : ()=>{navigate('/login')}}>Add to basket</button>
        </div>
    )
}

export default Product