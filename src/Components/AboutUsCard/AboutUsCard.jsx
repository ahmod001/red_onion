import { } from 'react';
import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import employee_1 from "../../assets/images/why_us/employee_1.png";
import bus from "../../assets/images/icons/bus.png";
import { hoverEffectStyle } from "../Card/Card";

const AboutUsCard = () => {
    return (
        <Card sx={{ ...hoverEffectStyle, maxWidth: 344 }}>
                {/* Banner Img */}
                <CardMedia
                    component="img"
                    height="140"
                    image={employee_1}
                    alt="green iguana"
                />
                <CardContent sx={{px: 2}}>
                    <div className='flex space-x-3.5'>
                        {/* Icon */}
                        <img src={bus} className='icon-image h-9' alt="" />

                        {/* Texts */}
                        <div className='space-y-2'>
                            <h4 className='tracking-wide'>Fast Delivery</h4>

                            <p className='text-sm text-gray-800 tracking-wider'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam dignissimos quidem excepturi corporis eligendi sint odio dolorum esse, consequuntur hic consequatur doloribus eum, dolorem aut nobis quis dicta maxime asperiores.
                            </p>
                        </div>
                    </div>
                </CardContent>
        </Card>
    );
};

export default AboutUsCard;