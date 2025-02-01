import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { CardBody, Card } from 'reactstrap';

import { mapData } from './mapData';

export default function Neighborhoods() {
	return (
		<CardBody className='p-5'>
			<h3 className='mb-5'>Get to know the neighborhoods</h3>
			<div className='position-relative'>
				<Swiper
					modules={[Pagination, Navigation]}
					spaceBetween={20}
					slidesPerView={2}
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
									<p>{map?.highlights && `Highlights: ${map?.highlights}`}</p>
									<p>{map?.note && `Note: ${map?.note}`}</p>
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
