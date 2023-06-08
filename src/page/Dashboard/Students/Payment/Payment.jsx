import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import useSelectedClasses from '../../../../hooks/useSelectedClasses';
import CheckOutForm from './CheckOutForm';
import payment from "../../../../../public/payment.json";
import Lottie from "lottie-react";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

const Payment = () => {
    const [selectedClasses ] =  useSelectedClasses();
    
    const totalPrice = selectedClasses.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(totalPrice.toFixed(2));

    return (
        <div>
            <div className='w-72 m-auto'>
            <Lottie animationData={payment} loop={true} />
            </div>
             <Elements stripe={stripePromise}>
            <CheckOutForm selectedClasses={selectedClasses} price={price}></CheckOutForm>
        </Elements>
        
        </div>
    );
};

export default Payment;