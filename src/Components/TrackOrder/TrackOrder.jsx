import DeliveryInfo from './DeliveryInfo/DeliveryInfo';
import GoBackButton from '.././GoBackButton/GoBackButton';
import { localStorageHandler } from '../../assets/FakeData/FakeData';
import { Fade, useMediaQuery } from '@mui/material';

const TrackOrder = () => {
    const getOrderInfo = localStorageHandler('get', 'orderDetails')
    const { delivery } = getOrderInfo;
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
                                height={isLargeScreen? "440": "220"}
                                frameBorder="0"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=paris+(My%20Business%20Name)&amp;t=p&amp;z=9&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
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