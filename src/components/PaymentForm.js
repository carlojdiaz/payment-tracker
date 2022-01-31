import React from 'react'
import PayAmount from './PayAmount'
import PayDate from './PayDate'
import './PaymentForm.css'

const PaymentForm = () => {
    return (
        <>
        <div className='payment-container'>
            <h2>Make a payment</h2>
            <div className='form-container'>
                <PayAmount />
                <PayDate />
            </div>
        </div>
        </>
    )
}

export default PaymentForm
