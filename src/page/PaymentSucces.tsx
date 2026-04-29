import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const PaymentSucces = () => {
    const [searchParams] = useSearchParams();
    
    const tid = searchParams.get('tid');  // transaction.UUID
    const iid = searchParams.get('iid');  // intentId

    useEffect(()=>{
        console.log("tid:",tid,"iid:",iid);
        
    },[tid,iid])
    return (
        <div>PaymentSucces</div>
    );
};

export default PaymentSucces;