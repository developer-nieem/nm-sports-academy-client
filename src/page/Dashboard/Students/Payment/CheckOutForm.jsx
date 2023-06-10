import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import './payment.css';
import axios from "axios";
import Swal from "sweetalert2";

const CheckOutForm = ({price , selectedClasses}) => {
    const stripe =  useStripe();
const elements =  useElements();
const [clientSecret, setClientSecret] = useState("");
const [showError , setShowError] = useState('');
const {user} = useContext(AuthContext);
const [processing, setProcessing] = useState(false);


useEffect(() => {
           
    axios.post('https://assignment12-server-developer-nieem.vercel.app/create-payment-intent', { price })
    .then(res => {
    
        setClientSecret(res.data.clientSecret);
    })


  }, []);


const handleSubmit = async (event) => {
  
    event.preventDefault();

    if (!stripe || !elements) {
      
      return;
    }

    
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setShowError(error.message)
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }

    setProcessing(true)

    const {paymentIntent , error: confirmError} = await stripe.confirmCardPayment(
        clientSecret ,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: user?.displayName || 'unknown',
              email: user?.email || 'unknown',
            },
          },
        },
      );

      if (confirmError) {
        console.log(confirmError);
      }
      setProcessing(false)

      if (paymentIntent?.status === "succeeded") {
        const transaction =  paymentIntent?.id
        setShowError(`Transaction Complete and  Your transaction ID :  ${transaction}`)

 
        const payment =  {
          email: user.email,
          transactionId: paymentIntent?.id,
          paymentDate: new Date(),
          price,
          quantity: selectedClasses.length,
          Items: selectedClasses.map(item => ({
            name: item?.name,
            image: item?.image,
            instructor: item?.instructor,
            price: item?.price,
            available_seats: item?.available_seats
          }))
        };
        axios.post('https://assignment12-server-developer-nieem.vercel.app/payment',  payment )
    .then(res => {
    
        if (res.data.insertedId) {
         
          fetch(`https://assignment12-server-developer-nieem.vercel.app/selected-classes-delete/${user?.email}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                 console.log('deleted all selected courses');
              }
            });


            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Payment successes!',
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
      }

  };


    return (
       <>
        <form className="w-96  payment" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn btn-primary " type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      <p className="text-red-600"> {showError}</p>
       
       </>
      
    );
};

export default CheckOutForm;