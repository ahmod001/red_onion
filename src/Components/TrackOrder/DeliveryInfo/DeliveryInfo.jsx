import { } from 'react';
import delivery_man from "../../../assets/images/delivery_icons/delivery_man.png";
import helmet from "../../../assets/images/delivery_icons/helmet.png";
import { Button, Step, StepButton, Stepper } from '@mui/material';
import { localStorageHandler } from '../../../assets/FakeData/FakeData';


const DeliveryInfo = ({delivery}) => {

    return (
        <div className='col bg-gray-100 space-y-6 px-5 py-8 rounded-xl mx-auto w-full max-w-[21rem]'>
            <div className='space-y-3.5'>
                {/* Delivery_man Img */}
                <div className='pl-5'>
                    <img className='max-h-20' src={delivery_man} alt="delivery-man" />
                </div>
                {/* Locations Info */}
                <div className=' p-3.5 bg-white rounded-lg'>
                    <div className="space-y-4">

                        {[{ id: 0, title: 'Your Location', location: delivery.customer_location },
                        { id: 1, title: 'Shop Location', location:delivery.restaurant_location }].map(step => (

                            <div key={step.id} className="flex space-x-2.5 items-center">
                                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                                <div className="mt-auto space-y-">
                                    <h5 className='font-sans text-sm font-semibold'>{step.title}</h5>
                                    <p className='text-xs text-gray-500'>{step.location}</p>
                                </div>
                            </div>
                        ))

                        }
                    </div>

                </div>
            </div>

            <div className='space-y-4'>
                {/* Estimated Time */}
                <div className='space-y-0.5'>
                    <h1 className='text-3xl'>09:30</h1>
                    <p className='text-xs text-gray-500'>Estimated delivery time</p>
                </div>

                {/* Rider Info */}
                <div className='flex align-middle space-x-4 py-2.5 px-2.5 bg-white h-16 rounded-lg'>
                    {/* Rider_img */}
                    <div>
                        <img className='max-h-11 my-auto' src={helmet} alt="rider" />
                    </div>
                    {/* Rider_name */}
                    <div>
                        <h5 className='font-sans font-semibold'>Hasan</h5>
                        <p className='text-xs text-gray-500'>Your rider</p>
                    </div>
                </div>
            </div>

            {/* Contact */}
            <div>
                <Button fullWidth
                    color='error'
                    variant='contained'>
                    Contact
                </Button>
            </div>
        </div>
    );
};

export default DeliveryInfo;