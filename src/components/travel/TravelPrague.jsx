import { Card, CardBody, Col, Row } from 'reactstrap';
import map from '../../../src/assets/images/prague-map.png';

import './travel.scss';
import Neighborhoods from './Neighborhoods.jsx';
import PublicTransport from './PublicTransport.jsx';

export default function TravelPrague({ showHoods, setShowHoods, showMhd, setShowMhd }) {
	return (
		<Card className='prague-info-card'>
			{showHoods 
				? <Neighborhoods setShowHoods={setShowHoods} />
				: showMhd
					? <PublicTransport setShowMhd={setShowMhd} />
					: <CardBody>
						<h3>Travel in Prague</h3>
						<Row className='d-flex justify-content-center'>
							<Col md='12' xl='6' lg='12' sm='12' xs='12'>
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
							<Col  md='12' xl='6' lg='12' sm='12' xs='12' className='prague-map d-flex flex-column align-items-center'>
								<div className='mt-2'>
									<img src={map} alt='Map of Prague' style={{ width: "38rem"}} />
								</div>
								<div className='p-5'>
									<button className='hood-btn m-3 p-2' onClick={() => setShowHoods(true)} role='button'>
										Check out the neighboorhoods
									</button>
									<button className='hood-btn m-3 p-2' onClick={() => setShowMhd(true)} role='button'>
										Public Transport
									</button>
								</div>
							</Col>
						</Row>
					</CardBody>
			}
		</Card>
	);
}
