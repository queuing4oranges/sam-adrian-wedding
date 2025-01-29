import { Container, Row, Col } from 'reactstrap';

import './travel.scss';

export default function Travel() {
return (
		<Container
			fluid
			id='travel'
			className='travel-container w-100 h-100 pb-5 px-5'
		>
			<Row className='pt-5'>
				<h1 className='pt-5 px-5 text-center'>Travel and Accomodation</h1>
			</Row>
			<Row className='pt-5 w-50 mx-auto'>
				<Col>

				</Col>
			</Row>
		</Container>
	)
}
