import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Container, Row } from 'reactstrap';

import CountdownTimer from './CountdownTimer.jsx';
import AnimatedHeading from './AnimatedHeading.jsx';

import './details.scss';

export default function Details() {
	const [isMobile, setIsMobile] = useState(3); // 1: mobile, 2: tablet, 3: desktop
	// Target date and time for the countdown timer component
	const targetDate = '2025-09-08T00:01:00';
	const innerWidth = window.innerWidth;

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 576) {
				setIsMobile(1);  // Mobile
			} else if (window.innerWidth <= 768) {
				setIsMobile(2);  // Tablet
			} else {
				setIsMobile(3);  // Desktop
			}
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);

	}, [innerWidth]);

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
		<Container fluid className='details-container w-100 min-vh-100 p-5'>
			<Row className='m-0 p-0 text-wrap'>
				<AnimatedHeading />
			</Row>
			<Row className='d-flex justify-content-center'>
				<CountdownTimer targetDate={targetDate}/>
			</Row>
			<Row className='w-75 text-center mx-auto my-5'>
				<span className='details-text'>
					<p>
						<i className='bi bi-airplane me-2'/>
						<strong>Monday mandatory for the friends flying in, for the Prague locals we will begin Tuesday.</strong>
					</p>
					<p>
						<strong>Experience Prague, a cozy cottage in the woods, and themed parties with friends.</strong>
						<i className='bi bi-balloon-heart' />
					</p>
				</span>
			</Row>
			<Row className='d-flex align-items-center justify-content-center'>
				<div className='slider-container w-75'>
					<Swiper
						modules={[Autoplay]}
						spaceBetween={20}
						slidesPerView={isMobile}
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
			</Row>
		</Container>
	)
}
