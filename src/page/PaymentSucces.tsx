import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import { useVerifyPayment } from '../hook/useCustomHook';
import { QRCodeSVG } from 'qrcode.react';

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const hasVerified = useRef(false); // prevent double-call in strict mode

    const tid = searchParams.get('tid');
    const iid = searchParams.get('iid');
    const plate_number = searchParams.get('pln');
    const payment_method = searchParams.get('pm');

    const { mutate: verifyPayment, isPending, isSuccess, isError } = useVerifyPayment();

    // Check if already verified from a previous visit/refresh
    const alreadyVerified = sessionStorage.getItem(`verified_${tid}`);

    useEffect(() => {
        if (!tid || !iid || !plate_number || !payment_method) return;
        if (alreadyVerified) return; // skip if already verified
        if (hasVerified.current) return; // skip double call in strict mode

        hasVerified.current = true;
        verifyPayment({
            intent_id: iid,
            transaction_id: tid,
            plate_number: plate_number,
            payment_method: payment_method,
        }, {
            onSuccess: () => {
                // Save to sessionStorage so refresh still shows success
                sessionStorage.setItem(`verified_${tid}`, 'true');
            }
        });
    }, [tid, iid, plate_number, payment_method]);

    if (!tid || !iid || !plate_number || !payment_method) return <PageNotFound />;

    // Show success if either just verified OR previously verified
    const showSuccess = isSuccess || !!alreadyVerified;

    return (
        <div className='h-dvh flex justify-center items-center text-center'>
            {showSuccess && (
                <div>
                    <p className='text-lg font-bold text-[#3ea13e] py-4 font-family-poppins '>
                        Payment Confirmed! Thankyou.
                    </p>
                    <div className='flex flex-col items-center gap-2 desktop:flex-row justify-evenly'>
                        <QRCodeSVG 
                            value={`https://violation.marikina.gov.ph/ticket/${tid}`}
                            size={100}
                        />
                        <button className='font-bold text-xl cursor-pointer border-2 border-black py-2 px-6 self-center hover:bg-[#0B318F] hover:text-white transition-all duration-400'>
                            Download
                        </button>
                    </div>
                    <p className='text-[#575757] font-family-poppins text-[10px] pt-4'>
                        Note! Download or take a screenshot of the QR code if vehicle was impounded
                    </p>
                    <p className='text-[#575757] font-family-poppins text-[10px]'>
                        QR code is needed in Office when you go to retrieve the vehicle.
                    </p>
                </div>
            )}

            {isPending && !alreadyVerified && (
                <div className='text-center font-family-poppins text-4xl'>
                    <p className='pb-6'>Verifying your payment...</p>
                    <p>please wait</p>
                </div>
            )}

            {isError && !alreadyVerified && (
                <div className='text-center font-family-poppins text-4xl'>
                    <p>Something went wrong. Please contact support.</p>
                </div>
            )}
        </div>
    );
};

export default PaymentSuccess;