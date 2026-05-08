import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import { useVerifyPayment } from '../hook/useCustomHook'; // adjust path
import { QRCodeSVG } from 'qrcode.react';

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
                payment_method: payment_method,
            });
        }, [tid, iid, plate_number, payment_method]);

        if (!tid || !iid || !plate_number || !payment_method) return <PageNotFound />;
        
        return (
        <div className=' h-dvh flex justify-center items-center'>
            {
                isSuccess && (
                    <div>
                        <p className='text-lg font-bold text-[#3ea13e] py-4 font-family-poppins'>Payment Confirmed! Thankyou.</p>
                        <div className='flex justify-evenly'>
                            <QRCodeSVG 
                                value="https://violation.marikina.gov.ph/ticket/12345"
                                size={100}
                                />
                            <button className='font-bold text-xl cursor-pointer border-2 border-black py-2 px-6 self-center hover:bg-[#0B318F] hover:text-white transition-all duration-400'>Download</button>
                        </div>
                        <p className='text-[#575757] font-family-poppins text-[10px] pt-4'>Note! Download or take a screenshot of the QR code if vehicle was impounded</p>
                        <p className='text-[#575757] font-family-poppins text-[10px]'>
                            QR code is needed in Office when you go to retrieve the vehicle.
                        </p>
                    </div>
                )
            }
             {
                isPending && (
                    <div className='text-center font-family-poppins text-4xl'>
                        <p className='pb-6'>Verifying your payment...</p>
                        <p>please wait</p>
                    </div>
                )
            }
            {
                isError && (
                    <div className='text-center font-family-poppins text-4xl'>
                        <p className='pb-6'>Something went wrong. Please contact support.</p>
                    </div>
                )
            }
        </div>
    )
};

export default PaymentSucces;