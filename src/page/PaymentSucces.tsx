import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import { useVerifyPayment } from '../hook/useCustomHook'; // adjust path

const PaymentSucces = () => {
    const [searchParams] = useSearchParams();

    const tid = searchParams.get('tid');
    const iid = searchParams.get('iid'); // PayMongo appends this automatically
    const plate_number = searchParams.get('pln');

    const { mutate: verifyPayment, isPending, isSuccess, isError } = useVerifyPayment();
    
    useEffect(() => {
        if (!tid || !iid || !plate_number) return;
        verifyPayment({
            intent_id: iid,
            transaction_id: tid,
            plate_number: plate_number,
        });
    }, [tid, iid, plate_number]);

    if (!tid || !iid || !plate_number) return <PageNotFound />;

    if (isPending) return <div>Verifying your payment...</div>;
    if (isError)   return <div>Something went wrong. Please contact support.</div>;
    if (isSuccess) return <div>Payment confirmed! Thank you.</div>;

    return null;
};

export default PaymentSucces;