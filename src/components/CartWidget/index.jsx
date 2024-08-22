import { Icon } from '@iconify/react';
import Pill from '../Pill';

const CartWidget = () => {

    return (
        <>
            <div className="cart-widget">
                <Pill text= {2}/>
                <Icon className="cart-widget__icon" icon="teenyicons:bag-solid" />
            </div>
        </>
    )
}

export default CartWidget