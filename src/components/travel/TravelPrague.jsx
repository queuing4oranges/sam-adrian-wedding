import { Card, CardBody, Col, Row } from 'reactstrap';
import map from '../../../src/assets/images/prague-map.png';
import { YellowArrow } from '../../assets/svgs/YellowArrow.jsx';

import './travel.scss';
import Neighborhoods from './Neighborhoods.jsx';

export default function TravelPrague({ showHoods, setShowHoods }) {
	return (
		<Card className='prague-info-card'>
			{showHoods 
				? <Neighborhoods />
				: <CardBody>
					<h3>Travel in Prague</h3>
					<Row>
						<Col md='6'>
							<p>
								The map highlights the eight best neighborhoods to stay in Prague, marked with colorful outlines and numbered based on their popularity among tourists. These areas are marked and ranked from 1 (most popular) to 8 (less popular but still worth considering) in blue. The circle in red marks the general area I would recommend if you wish to be centrally located.
							</p>
							<p>
								Note: In Prague, each neighborhood corresponds to Prague’s district system, identified by both names and numbers. For example, I am in Prague 10 in the specific neighborhood of Vršovice. The numbers marked in blue on this map are not the corresponding district. If you have any questions, feel free to reach out! The red star marks my location.
							</p>
							<p>
								Neighborhoods marked 1–3 are the main tourist areas and are extremely walkable. However, outside of these areas, you’ll find some fantastic places to stay. Keep in mind that public transportation is convenient and easy to use throughout Prague.
							</p>
						</Col>
						<Col md='6' className='prague-map d-flex flex-column align-items-center'>
							<div className='mt-2'>
								<img src={map} alt='Map of Prague' style={{ width: "38rem"}} />
							</div>
							<div
								className='prague-hoods position-relative p-3 d-inline-block'
								onClick={() => setShowHoods(true)}
							>
								<YellowArrow 
									width={300} 
									height={100} 
									className='position-absolute top-50 start-50 translate-middle z-index-0' 
								/>
								<span className='position-absolute top-50 start-50 translate-middle z-index-1 text-center'>
									<p className='fs-3 m-0 ms-3 lh-sm text-nowrap'>Check out the neighborhoods!</p>
								</span>
							</div>

						</Col>
					</Row>
				</CardBody>
			}
		</Card>
	)
}
