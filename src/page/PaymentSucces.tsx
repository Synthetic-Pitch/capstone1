import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageNotFound from './PageNotFound';

const PaymentSucces = () => {
    const [searchParams] = useSearchParams();
    
    const tid = searchParams.get('tid');
    const iid = searchParams.get('iid');
    const plate_number = searchParams.get('pln');

    // ✅ hooks first, always — before any early return
    useEffect(() => {
        if (!tid || !iid || !plate_number) return;
        console.log("tid:", tid, "iid:", iid, "plate_number:", plate_number);
    }, [tid, iid, plate_number]);

    // ✅ guard after all hooks
    if (!tid || !iid || !plate_number) return <PageNotFound />;

    return (
        <div>PaymentSucces</div>
    );
};

export default PaymentSucces;