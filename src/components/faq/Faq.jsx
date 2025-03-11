import { Container, Row, Col } from 'reactstrap';

import Akkordeon from './Akkordeon';

import './faq.scss';
import '../../components/button55.scss';

export default function faq() {
	return (
		<Container
			fluid
			className='faq-container min-vh-100 w-100 p-5'
			id='faq'
		>
			<Row className='pt-5 px-5'>
				<h1 className='px-5 text-center'>FAQ</h1>
			</Row>
			<Row className='py-5 d-flex justify-content-center'>
				<Col xl='6'>
					<Akkordeon />
				</Col>
			</Row>
		</Container>
	)
}
