import React, { useState } from 'react';
import Basket from '../../img/buy_icon.png'
import Order from './Order';

const showOrders = (props) => {
    let summa = 0
    props.orders.forEach(el => summa += Number.parseFloat(el.price))
    return (
        <div>
            {props.orders.map(el => (
                <Order onDelete={props.onDelete} key={el.id} item={el} />
            ))}
            <p className='summa'>
                Total: {new Intl.NumberFormat().format(summa)}$
            </p>
            
        </div>

    )
}

const showNothing = () => {
    return (
        <div className='empty'>
            <h2>
                Empty. Please add products...😭
            </h2>
        </div>
    )
}

export default function Header (props) {

    const [cartOpen, setCartOpen] = useState(false);

    return (
        <header>
            <div className='header_nav'>
                <span className='logo'>House Staff</span>
                <ul className='nav'>
                    <li>About Us</li>
                    <li>Contacts</li>
                    <li>Cabinet</li>
                </ul>
                <img src={Basket} alt='Basket' className={`shop-basket ${cartOpen && 'active'}`} onClick={() => setCartOpen(!cartOpen)}  />
                {cartOpen && (
                    <div className='shop-cart'>
                        {props.orders.length > 0 ? showOrders(props) : showNothing()}
                    </div>
                )}
            </div>
            <div className='presentation'>

            </div>
        </header>
    )
}
