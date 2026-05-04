import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import { useVerifyPayment } from '../hook/useCustomHook'; // adjust path

const PaymentSucces = () => {
    const [searchParams] = useSearchParams();

    const tid = searchParams.get('tid');
    const iid = searchParams.get('iid'); // PayMongo appends this automatically
    const plate_number = searchParams.get('pln');
    const payment_method = searchParams.get('pm');

    const { mutate: verifyPayment, isPending, isSuccess, isError } = useVerifyPayment();
    
    useEffect(() => {
        if (!tid || !iid || !plate_number || !payment_method) return;
        verifyPayment({
            intent_id: iid,
            transaction_id: tid,
            plate_number: plate_number,
            payment_method: payment_method 
        });
    }, [tid, iid, plate_number, payment_method]);

    if (!tid || !iid || !plate_number || !payment_method) return <PageNotFound />;

    if (isPending) return <div>Verifying your payment...</div>;
    if (isError)   return <div>Something went wrong. Please contact support.</div>;
    if (isSuccess) return <div>Payment confirmed! Thank you.</div>;

    return null;
};

export default PaymentSucces;