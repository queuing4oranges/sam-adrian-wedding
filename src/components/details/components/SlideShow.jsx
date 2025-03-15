import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import './slideshow.scss';

export default function SlideShow() {
	// Images for slider component
	const slides = [
		{ id: 1, image: '/assets/sam-and-adrian/1.png' },
		{ id: 2, image: '/assets/sam-and-adrian/2.png' },
		{ id: 3, image: '/assets/sam-and-adrian/3.png' },
		{ id: 4, image: '/assets/sam-and-adrian/4.png' },
		{ id: 5, image: '/assets/sam-and-adrian/5.png' },
		{ id: 6, image: '/assets/sam-and-adrian/6.png' },
	];

	return (
		<div className='slider-container w-100 d-flex justify-content-center'>
			<Swiper
				modules={[Autoplay, Pagination]}
				slidesPerView={1}
				autoplay={{ delay: 3000 }}
				loop={true}
				pagination={{ clickable: true }}
			>
				{slides.map((slide) => (
					<SwiperSlide key={slide.id}>
						<img src={slide.image}/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
