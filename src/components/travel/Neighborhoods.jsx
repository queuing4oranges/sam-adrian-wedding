import React, { useEffect, useState } from 'react';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { CardBody, Card } from 'reactstrap';

import { mapData } from './mapData';
import Xicon from '../../assets/svgs/Xicon';

export default function Neighborhoods({ setShowHoods }) {
	const [isMobile, setIsMobile] = useState(3); // 1: mobile, 2: tablet, 3: desktop
	const innerWidth = window.innerWidth;

	// Handles amount of slides to be shown based on screen width
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1200) {
				setIsMobile(2);  // Desktop
			} else {
				setIsMobile(1);  // Mobile
			}
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);

	}, [innerWidth]);

	return (
		<CardBody>
			<div className='d-flex justify-content-between'>
				<h3 className='mb-5'>Get to know the neighborhoods</h3>
				<span
					onClick={() => setShowHoods(false)}
					className='close-x d-flex justify-content-end pe-0'
					title='Close'
				>
					<Xicon
						width={30}
						height={30}
						color='#164443'
						className='xicon'
					/>
				</span>
			</div>
			<div className='position-relative'>
				<Swiper
					modules={[Pagination, Navigation]}
					spaceBetween={20}
					slidesPerView={isMobile}
					navigation
					loop={true}
				>
					{mapData.map((map, idx) => (
						<SwiperSlide key={idx} className='d-flex align-items-stretch'>
							<Card
								className='p-5 h-100 d-flex flex-column justify-content-end text-white position-relative'
								style={{
									backgroundImage: `url(${map?.imgUrl})`,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
									minHeight: '400px'
								}}
							>
							{/* Overlay for better readability */}
							<div className='position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75'></div>
							
							<div className='position-relative d-flex flex-column flex-grow-1'>
								<h3 className='mb-4'>{map?.hood}</h3>
								<p className='flex-grow-1'>{map?.info}</p>
								<div className='mt-auto'>
									<p>{map?.note && <><strong>Note:</strong> {map.note}</>}</p>
									<p>{map?.highlights && <><strong>Highlights:</strong> {map?.highlights}</>}</p>
								</div>
							</div>
							</Card>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</CardBody>
	)
}
