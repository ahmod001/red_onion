import { useState } from 'react';
import { Button, Card, CardActionArea, CardContent, useMediaQuery } from '@mui/material';
import { hoverEffectStyle } from "../../Card/Card";


const AboutUsCard = ({ ourInfo }) => {
    const { title, description, banner_img, icon } = ourInfo;

    const [isFullDescriptionVisible, setIsFullDescriptionVisible] = useState(false);

    // Media Quarry
    const isSmallScreen = useMediaQuery('(min-width: 640px)');

    return (
        <Card sx={{ ...hoverEffectStyle, maxWidth: isSmallScreen ? 365 : 275, height: 'fit-content' }}>
            {/* Banner Img */}
            <CardActionArea>
                <img src={banner_img} className='max-h-96 mx-auto' alt={title} />
            </CardActionArea>

            <CardContent sx={{ px: 1.7}}>
                <div className='flex lg:space-x-4 space-x-3'>

                    {/* Icon */}
                    <img src={icon} className='icon-image lg:h-9 h-7' />

                    <div className='space-y-1.5'>
                        {/* Title */}
                        <h4 className='tracking-wide lg:text-base text-sm font-semibold lg:font-normal lg:text-black text-gray-700'>{title}</h4>

                        {/* Description: Max Text_Length <= 185 Characters */}
                        <p className='text-sm lg:text-gray-700 sm:text-black text-gray-700  text-justify'>

                            {!isFullDescriptionVisible ?
                                description.slice(0, 100)
                                : description.slice(0, 185)}
                        </p>

                        {/* SeeMore/Less Clip button  */}
                        {isFullDescriptionVisible ?
                            <Button
                                onClick={() => setIsFullDescriptionVisible(!isFullDescriptionVisible)}
                                sx={{ textTransform: 'capitalize' }}
                                size='small'>
                                See Less
                            </Button>

                            : <Button
                                onClick={() => setIsFullDescriptionVisible(!isFullDescriptionVisible)}
                                sx={{ textTransform: 'capitalize' }}
                                size='small'>
                                See More
                            </Button>}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default AboutUsCard;