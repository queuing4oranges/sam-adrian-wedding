import { Container, Row, Col, Card } from 'reactstrap';

import Akkordeon from './Akkordeon';
import LayingDoodle from '../../assets/svgs/LayingDoodle';

import './faq.scss';

export default function faq() {
	const userAgent = navigator.userAgent.toLowerCase(); // Check which device user is using

	const handleAddToCalendar = () => {
		if (/iphone|ipad|mac os/.test(userAgent)) {
			handleAppleCalendar();  // iOS or Mac users
		} else {
			handleGoogleCalendar(); // Default to Google Calendar
		}
	};

	// Create a calender event for Google user
	const handleGoogleCalendar = () => {
		// Construct URL
		const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("Sam and Adrian's Wedding Celebration")}&dates=${'20250908T120000'}/${'20250912T120000'}&location=${encodeURIComponent('Prague')}&sprop=&sprop=name:`;

		window.open(googleCalendarUrl, '_blank');
	};

	// Create a calender event for Apple user
	const handleAppleCalendar = () => {
		// Strip leading whitespace
		const stripIndent = (str) => str.replace(/^\s+/gm, ''); // Preventing problems with whitespace in isContent

		// Create the .ics file content
		const icsContent = stripIndent(`
			BEGIN:VCALENDAR
			VERSION:2.0
			BEGIN:VEVENT
			SUMMARY:'Sam and Adrian's Wedding Celebration'
			DTSTART:'20250908T120000'
			DTEND:'20250912T120000'
			LOCATION:'Prague'
			END:VEVENT
			END:VCALENDAR
		`);

		// Create a Blob with the .ics content
		const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
		const url = window.URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.setAttribute('download', 'wedding.ics');
		document.body.appendChild(link);

		// Trigger a click on the link to start the download
		link.click();

		// Remove the link from the document
		document.body.removeChild(link);
	};

	return (
		<Container
			fluid
			id='faq'
			className='faq-container w-100 p-5'
		>
			<Row className='pt-5 px-5'>
				<h1 className='px-5 text-center'>FAQ</h1>
			</Row>
			<Row className='py-5 w-50 mx-auto'>
				<Col>
					<Akkordeon />
				</Col>
			</Row>
			<Row className='py-5'>
				<h1 className='px-5 text-center'>RSVP</h1>
			</Row>
			<Row className='px-5'>
				<Card id='rsvp'>
					<Row>
						<span className='doodle-span d-flex justify-content-center'>
							<LayingDoodle />
						</span>
					</Row>
					<Row>
						<Col md='4' className='p-5'>
							<p>
								Please feel free to contact us if you have additional questions.
							</p>
							<div className="btn-wrapper">
								<span className='span-container'>
									<span>
										<i className='pe-2 bi bi-envelope-heart' />
										Email us!
									</span>
								</span>
							</div>
						</Col>
						<Col md='4' className='p-5'>
							<p>
								Please RSVP by <strong>August, 10 </strong>to help us finalize arrangements. <br /> Incase you missed it above here, again, the RSVP form:
							</p>
						</Col>
						<Col md='4' className='p-5 text-end'>
							<p>
								Join us in celebrating! <br />
								Save the date to your calendar.
							</p>
							<div
								className="btn-wrapper d-flex justify-content-end"
								onClick={() => handleAddToCalendar()}
							>
								<span className='span-container'>
									<span>
										<i className='pe-2 bi bi-calendar-heart' />
										Add to calendar
									</span>
								</span>
							</div>
						</Col>
					</Row>
					<div className='d-flex justify-content-center pb-5'>
						<div className='d-flex align-items-center'>
							<button className='rsvp-btn'>
								<a href='https://docs.google.com/forms/d/e/1FAIpQLSeb96PN2yCs9EsAPzcfAT0wC8Y9TrquhyJWD7JDcFU-VWp8bw/viewform' target='_blank' className='text-decoration-none'>
									<i className='bi bi-chevron-double-right me-2' />
									RSVP
								</a>
							</button>
						</div>
					</div>
				</Card>
			</Row>
		</Container>
	)
}
