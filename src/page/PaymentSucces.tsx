import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
const PaymentSucces = () => {
    const [searchParams] = useSearchParams();
    
    const tid = searchParams.get('tid');  // transaction.UUID
    const iid = searchParams.get('iid');  // intentId
    const paymentIntentId = searchParams.get('payment_intent_id');
    useEffect(()=>{
        console.log(tid,iid,paymentIntentId);
        
    },[tid,iid,paymentIntentId])
    return (
        <div>PaymentSucces</div>
    );
};

export default PaymentSucces;