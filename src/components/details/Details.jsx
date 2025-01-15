import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Container, Row } from 'reactstrap';

import './details.scss';
import CountdownTimer from './CountdownTimer';

export default function Details() {
	const targetDate = '2025-09-08T00:01:00';

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
		<Container fluid id='details' className='details-container w-100 h-100 pb-5 px-5'>
			<Row className='pt-5'>
				<h1 className='pt-5 px-5 text-center'>Monday, September 8 - Friday, September 12</h1>
			</Row>
			<Row className='d-flex align-items-center justify-content-center'>
				<div className='round-column mt-5 d-flex flex-column align-items-center justify-content-center text-center'>
					<p className='m-2 w-75'>
						<i className='bi bi-airplane me-2'/>
						Monday mandatory for the friends flying in, for the Prague locals we will begin Tuesday. <br /> <br />
						Experience Prague, a cozy cottage in the woods, and themed parties with friends.
						<i className='bi bi-balloon-heart' />
					</p>
				</div>
				<div className='w-50'>
						<Swiper
							modules={[Autoplay]}
							spaceBetween={20}
							slidesPerView={3}
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
					<CountdownTimer targetDate={targetDate}/>
					</div>
			</Row>
		</Container>
	)
}
