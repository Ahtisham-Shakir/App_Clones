import React from 'react';
import './Checkout.css';
import Header from '../../components/header/Header';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../../components/checkoutProduct/CheckoutProduct';

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <>
            <Header />
            <div className='checkout'>
                <img className='checkout__ad' src='https://m.media-amazon.com/images/S/abs-image-upload-na/c/AmazonStores/ATVPDKIKX0DER/46ce39b478a48bc311d9ebcceaab26f2.w1500.h400._CR0%2C0%2C1500%2C400_SX1500_.jpg' alt='ad' />

                {
                    basket?.length === 0 ? (
                        <div>
                            <h2>Your Shopping Basket is empty</h2>
                            <p>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.</p>
                        </div>
                    ) : (
                        <div>
                            <h2 className='checkout__title'>Your Shopping Basket</h2>
                            {
                                basket?.map(item=>(
                                    <CheckoutProduct key={Math.random()*1000000000} {...item}/>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Checkout