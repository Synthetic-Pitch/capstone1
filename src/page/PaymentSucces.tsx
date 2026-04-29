import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const PaymentSucces = () => {
    const [searchParams] = useSearchParams();
    
    const tid = searchParams.get('tid');  // transaction.UUID
    const iid = searchParams.get('iid');  // intentId
    const plate_number = searchParams.get('pln');  // plate_number
    useEffect(()=>{
        console.log("tid:",tid,"iid:",iid,"plate_number:",plate_number);
        
    },[tid,iid,plate_number])
    return (
        <div>PaymentSucces</div>
    );
};

export default PaymentSucces;