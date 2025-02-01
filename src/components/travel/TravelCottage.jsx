import { Card, CardBody, Row, Col } from 'reactstrap';

import accomm3 from '../../assets/cottage/accomm3.png';
import accomm4 from '../../assets/cottage/accomm4.png';
import accomm5 from '../../assets/cottage/accomm5.png';
import accomm6 from '../../assets/cottage/accomm6.png';
import accomm7 from '../../assets/cottage/accomm7.png';

export default function TravelCottage() {
	const accomodationImages = [accomm3, accomm4, accomm5, accomm6, accomm7];

	return (
		<Card className='cottage-info-card'>
			<CardBody>
				<h3>Accommodation in the Cottage</h3>
				<Row>
					<Col md='4' className='p-3'>
						<p className='mb-2'>Important note</p>
							<ul>
								<li>
									we will require people to pay their accom for the cottage (price TBA but expect XYZ for nights 9,10,11 of sept)
								</li>
								<li>
									food wise, while at the cottage, we will cover breakfast, lunch, dinner, alcoholic and non alc drinks.
								</li>
								<li>
									few pics of the cottage (rooms, garden, living area) of rooms and beds inside so mentally ppl can prepare to be grouped. Most likely 3-4 people per room. Choose your bed upon arrival.
								</li>
							</ul>

					</Col>
					<Col md='8' className='p-3'>
						<div className='row row-cols-3 g-3 p-3'>
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
