import { CardBody, Row, Col } from 'reactstrap';

import Xicon from '../../assets/svgs/Xicon';

export default function PublicTransport({ setShowMhd }) {
	return (
		<CardBody>
			<div className='d-flex justify-content-between'>
				<h3 className='mb-5'>Prague Public Transport</h3>
				<span
					onClick={() => setShowMhd(false)}
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
			<Row>
				<Col md='8' className='p-3'>
					<p>Prague&apos;s public transport is fairly simple. There are buses, trams and the metro. If you spend the day sightseeing, it is recommended to buy a 24h ticket as it covers the whole city and all means of public transport listed below.</p>
					<ul className='list-unstyled'>
						<li>
							<span className='d-flex align-items-center'><i className='bi bi-train-front me-2' /><h4 className='mb-0 mt-1'>Metro</h4></span>
							<p>There are three lines: Line A (green), Line B (yellow), Line C (red). The interval is around 2-4 minutes and 10 min in the evening/night. Tickets can be bought online, at a ticket terminal or the shops in the metro stations.</p>
							<p className='fw-bolder'>If you start your journey with the Metro, you need to buy and/or validate your ticket, before entering the platform (using the escalators).</p>
						</li>
						<li>
							<span className='d-flex align-items-center'><i className='bi bi-train-lightrail-front me-2' /><h4 className='mb-0 mt-1'>Trams</h4></span>
							<p>The 22 will take you through the whole city up to the castle and along many tourist attractions of Prague. If you buy a ticket inside of the tram, you do not need to validate it again and it will be valid for all other means of public transport.</p>
						</li>
						<li>
							<span className='d-flex align-items-center'><i className='bi bi-bus-front me-2' /><h4 className='mb-0 mt-1'>Buses</h4></span>
							<p>You can get on and off the bus from any door. When waiting for the bus, you need to stand visibly in the stop area. When getting off the bus, you need to request the stop by using the stop button or touching the door buttons (buses will not stop if not requested and no one waiting at the bus stop).</p>
						</li>
					</ul>
					<p>Ticket prices are very affordable. Day tickets (24 hours) are around $5. For further information, have a look at <a href='https://pid.cz/en/' target='_blank'>www.pid.cz</a></p>
				</Col>
				<Col md='4' className='p-3'>
					<p className='fw-bolder'><i className='bi bi-taxi-front me-2' />Using Uber...</p>
					<p>
						Uber operates in Prague and is a convenient option, especially for getting from the airport to the city center. A ride from Václav Havel Airport (PRG) to the center costs around CZK 500–800 ($20–35), depending on traffic and demand. At the airport, head to the &quot;Ride-Share Pickup&quot; area outside the terminal (usually near Parking P1/P2). Bolt is another popular ride-sharing app in Prague, often slightly cheaper. If you prefer a budget-friendly option, the Airport Express bus or Bus 119 + Metro can get you to the center for about CZK 40 ($1.50).
					</p>
					<p><i className='bi bi-exclamation-square me-2' />
						Unfortunately, overcharging tourists is still a common issue with some Prague taxi drivers. Avoid hailing taxis from the street—use Uber, Bolt etc. If you must take a regular taxi, always ask for the estimated fare in advance and make sure the meter is running.
					</p>
				</Col>
			</Row>
		</CardBody>
	)
}
