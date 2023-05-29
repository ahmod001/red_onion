import { useState } from 'react';
import DeliveryInfo from './DeliveryInfo/DeliveryInfo';
import GoBackButton from '.././GoBackButton/GoBackButton';
import { localStorageHandler } from '../../assets/FakeData/FakeData';
import { Fade, Skeleton } from '@mui/material';

const TrackOrder = () => {
    const getOrderInfo = localStorageHandler('get', 'orderDetails')
    const { delivery } = getOrderInfo;

    return (
        <main className='min-h-screen'>
            <Fade in={true}
            onDurationChange={()=> 1500}>
            <section className='mx-auto container space-y-3 px-3'>
                {/* Go Back Button */}
                <GoBackButton navigate={'/home'} />

                <section className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
                    
                    {/* Google Map */}
                    <div className='lg:order-none order-last col-span-2 bg-gray-100 rounded-md h-[27rem]'>
                            <iframe
                                title="Google Map"
                                className='rounded-md'
                                width="100%"
                                height="430"
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