import { CardBody, Row, Col } from 'reactstrap';
import map from '/assets/images/prague-map.png';
import Xicon from '../../assets/svgs/Xicon';

export default function PragueMap({ setShowPrague }) {
	return (
		<CardBody className='prague-map-container'>
			<div className='prague-map-title-container d-flex justify-content-between'>
				<h3 className='mb-5'>Exploring Prague</h3>
				<span
					onClick={() => setShowPrague(false)}
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
			<Row className='d-flex justify-content-center'>
				<Col xl='6' className='prague-map-cardbody'>
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
				<Col xl='6' className='prague-map d-flex flex-column align-items-center'>
					<div className='mt-2'>
						<img src={map} alt='Map of Prague' />
					</div>
				</Col>
			</Row>
		</CardBody>
	)
}
