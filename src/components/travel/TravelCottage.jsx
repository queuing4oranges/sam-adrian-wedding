import { Card, CardBody, Row, Col } from 'reactstrap';

import accomm3 from '../../assets/cottage/accomm3.png';
import accomm4 from '../../assets/cottage/accomm4.png';
import accomm5 from '../../assets/cottage/accomm5.png';
import accomm6 from '../../assets/cottage/accomm6.png';
import accomm7 from '../../assets/cottage/accomm7.png';

export default function TravelCottage() {
	const accomodationImages = [accomm3, accomm4, accomm5, accomm6, accomm7];

	return (
		<Card className='border-0 cottage-info-card'>
			<CardBody>
				<h3>Accommodation in the Cottage</h3>
				<Row>
					<Col xl='4' className='p-3'>
						<p className='mb-2'>Important note:</p>
						<p>
							Guests staying at the cottage will be required to cover the cost of accommodation. There are 8 shared rooms, each hosting 3-4 people. Beds can be chosen upon arrival. The total cost is CZK 3,400 ($145) per person, to be paid by August 10th at the latest.
						</p>
						<p>
							As for meals, we&apos;ve got you covered! During your stay at the cottage, we&apos;ll provide breakfast, lunch, dinner, as well as alcoholic and non-alcoholic drinks.
						</p>
					</Col>
					<Col xl='8' className='p-3'>
						<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 p-3'>
							{accomodationImages.map((img, idx) => (
								<img
									src={img}
									alt={`accommodation-${idx}`}
									key={idx}
									className='accommodation-image transition scale-hover'
								/>
							))}
						</div>
					</Col>
				</Row>
			</CardBody>
		</Card>
	)
}
