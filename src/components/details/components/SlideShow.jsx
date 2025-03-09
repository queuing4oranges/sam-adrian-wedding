import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { getDeviceType } from '../utils/getDeviceType';

export default function SlideShow() {
	const [isMobile, setIsMobile] = useState(getDeviceType);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(getDeviceType()); // Update device type
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);

	}, []);

	// Images for slider component
	const slides = [
		{ id: 1, image: '../../src/assets/sam-and-adrian/1.png' },
		{ id: 2, image: '../../src/assets/sam-and-adrian/2.png' },
		{ id: 3, image: '../../src/assets/sam-and-adrian/3.png' },
		{ id: 4, image: '../../src/assets/sam-and-adrian/4.png' },
		{ id: 5, image: '../../src/assets/sam-and-adrian/5.png' },
		{ id: 6, image: '../../src/assets/sam-and-adrian/6.png' },
	];

	return (
		<div className='slider-container w-75'>
			<Swiper
				modules={[Autoplay]}
				spaceBetween={20}
				slidesPerView={isMobile || 1}
				autoplay={{ delay: 3000 }}
				loop={true}
			>
				{slides.map((slide) => (
					<SwiperSlide key={slide.id}>
						<img
							src={slide.image}
							style={{ width: '100%', height: 'auto', borderRadius: '10px', marginBottom: '3rem' }}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}