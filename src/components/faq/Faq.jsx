import { Container, Row, Col } from 'reactstrap';
import Akkordeon from './Akkordeon'

import './faq.scss';

export default function faq() {
	return (
		<Container
			fluid
			id='faq'
			className='faq-container w-100 h-100 pb-5 px-5'
		>
			<Row className='pt-5'>
				<h1 className='pt-5 px-5 text-center'>FAQ</h1>
			</Row>
			<Row className='pt-5 w-50 mx-auto'>
				<Col>
					<Akkordeon />
				</Col>
			</Row>
		</Container>
	)
}
