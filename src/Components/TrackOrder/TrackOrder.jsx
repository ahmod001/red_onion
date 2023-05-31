import DeliveryInfo from './DeliveryInfo/DeliveryInfo';
import GoBackButton from '.././GoBackButton/GoBackButton';
import { localStorageHandler } from '../../assets/FakeData/FakeData';
import { Fade, useMediaQuery } from '@mui/material';

const TrackOrder = () => {
    const getOrderInfo = localStorageHandler('get', 'orderDetails')
    const { delivery } = getOrderInfo;
    console.log(encodeURIComponent(delivery.customer_location.toLowerCase()));
    // Media Query
    const isLargeScreen = useMediaQuery('(min-width:1024px)');

    return (
        <main className='min-h-screen'>
            <Fade in={true}
                onDurationChange={() => 1500}>
                <section className='mx-auto container lg:space-y-3 space-y-1.5 px-3'>
                    {/* Go Back Button */}
                    <GoBackButton navigate={'/home'} />

                    <section className='grid lg:grid-cols-3 pt-2 pb-12 grid-cols-1 lg:gap-x-5 gap-y-7'>

                        {/* Google Map */}
                        <div className='lg:order-none order-last col-span-2 rounded-md lg:h-[27rem] mx-auto w-full lg:max-w-none sm:max-w-[30rem] max-w-[26rem] bg-gray-100'>
                            <iframe
                                title="Google Map"
                                className='rounded-md'
                                width="100%"
                                height={isLargeScreen ? "440" : "220"}
                                frameBorder="0"
                                loading='lazy'
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                src={`https://www.google.com/maps?q=${delivery.customer_location.toLowerCase()}&output=embed`}
                            ></iframe>
                        </div>

                        {/* Delivery Info */}
                        <DeliveryInfo delivery={delivery} />
                    </section>
                </section>
            </Fade>
        </main>
    );
};

export default TrackOrder;