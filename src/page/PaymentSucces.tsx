import { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import { useVerifyPayment } from '../hook/useCustomHook';
import { QRCodeCanvas } from 'qrcode.react';

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const hasVerified = useRef(false);
    const qrRef = useRef<HTMLDivElement>(null);

    const tid = searchParams.get('tid');
    const iid = searchParams.get('iid');
    const plate_number = searchParams.get('pln');
    const payment_method = searchParams.get('pm');
    const [verifiedUuid, setVerifiedUuid] = useState<string | null>(() => {
        return tid ? sessionStorage.getItem(`uuid_${tid}`) : null;
    });
    
    const { mutate: verifyPayment, isPending, isSuccess, isError, data } = useVerifyPayment();

    const alreadyVerified = sessionStorage.getItem(`verified_${tid}`);
    const savedUuid = tid ? sessionStorage.getItem(`uuid_${tid}`) : null;

    const uuid = data?.uuid ?? verifiedUuid ?? savedUuid;

    const handleDownload = () => {
        const originalCanvas = qrRef.current?.querySelector('canvas');
        if (!originalCanvas) return;

        const scale = 5;
        const padding = 20;
        const newCanvas = document.createElement('canvas');
        
        newCanvas.width = (originalCanvas.width * scale) + (padding * 2);
        newCanvas.height = (originalCanvas.height * scale) + (padding * 2);
        
        const ctx = newCanvas.getContext('2d');
        if (!ctx) return;
        
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, newCanvas.width, newCanvas.height);

        ctx.imageSmoothingEnabled = false;

        ctx.drawImage(
            originalCanvas, 
            padding, 
            padding, 
            originalCanvas.width * scale, 
            originalCanvas.height * scale
        );

        const url = newCanvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = url;
        link.download = `opss-qr-${uuid ?? 'ticket'}.png`;
        link.click();
    };
    
    useEffect(() => {
        if (!tid || !iid || !plate_number || !payment_method) return;
        if (alreadyVerified) return;
        if (hasVerified.current) return;

        hasVerified.current = true;
        verifyPayment({
            intent_id: iid,
            transaction_id: tid,
            plate_number: plate_number,
            payment_method: payment_method,
        }, {
            onSuccess: (data) => {
                sessionStorage.setItem(`verified_${tid}`, 'true');
                sessionStorage.setItem(`uuid_${tid}`, data.uuid);
                setVerifiedUuid(data.uuid);
            }
        });
    }, [tid, iid, plate_number, payment_method, alreadyVerified, verifyPayment]);

    if (!tid || !iid || !plate_number || !payment_method) return <PageNotFound />;

    const showSuccess = isSuccess || !!alreadyVerified;

    return (
        <div className='h-dvh flex justify-center items-center text-center'>
            {showSuccess && (
                <div>
                    <p className='text-2xl tablet:text-4xl font-bold text-[#3ea13e] py-4 font-family-poppins'>
                        Payment Confirmed! Thankyou.
                    </p>
                    <div className='flex flex-col items-center gap-2 desktop:flex-row justify-evenly my-6'>
                        <div ref={qrRef}>
                            {uuid && (
                                <QRCodeCanvas
                                    key={uuid}
                                    value={`${uuid}`}
                                    size={200}
                                />
                            )}
                        </div>
                        <button
                            onClick={handleDownload}
                            disabled={!uuid}
                            className='font-bold text-4xl cursor-pointer border-2 border-black py-2 px-6 my-4 self-center hover:bg-[#0B318F] hover:text-white transition-all duration-400 disabled:cursor-not-allowed disabled:opacity-50'>
                            Download
                        </button>
                    </div>
                    <p className='text-[#575757] font-family-poppins pt-4 text-md tablet:text-2xl'>
                        Note! Download or take a screenshot of the QR code if vehicle was impounded,
                    </p>
                    <p className='text-[#575757] font-family-poppins text-md tablet:text-2xl'>
                        QR code is needed in Office when you go to retrieve the vehicle.
                    </p>
                    <Link to={`/profile/${sessionStorage.getItem('plateNumber')}`}>
                        <button className='font-bold text-2xl cursor-pointer py-2 px-6 my-4 self-center text-[#6578b4] font-family-poppins'>
                            Go Back to Profile
                        </button>
                    </Link>
                </div>
            )}

            {isPending && !alreadyVerified && (
                <div className='text-center font-family-poppins text-md tablet:text-2xl'>
                    <p className='pb-6'>Verifying your payment...</p>
                    <p>please wait</p>
                </div>
            )}

            {isError && !alreadyVerified && (
                <div className='text-center font-family-poppins text-md tablet:text-2xl'>
                    <p>Something went wrong. Please contact support.</p>
                </div>
            )}
        </div>
    );
};

export default PaymentSuccess;
