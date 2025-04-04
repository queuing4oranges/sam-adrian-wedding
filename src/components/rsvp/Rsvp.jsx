import { useState } from 'react';
import { Container, Col, Row, Toast, ToastHeader, ToastBody } from 'reactstrap';
import LayingDoodle from '../../assets/svgs/LayingDoodle';

import './rsvp.scss';

export default function Rsvp() {
	const [showMessage, setShowMessage] = useState(false);

	const userAgent = navigator.userAgent.toLowerCase(); // Check which device user is using
	const handleAddToCalendar = () => {
		if (/iphone|ipad|mac os/.test(userAgent)) {
			const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
			if (isSafari) {
				handleAppleCalendar();  // iOS or Mac users
			} else {
				setShowMessage(true);
			}
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
			SUMMARY:Sam and Adrian's Wedding Celebration
			DTSTART;VALUE=DATE:20250908
			DTEND;VALUE=DATE:20250913
			LOCATION:Prague
			END:VEVENT
			END:VCALENDAR
		`);
    // Encode the .ics content as a data URI
    const dataUri = `data:text/calendar;charset=utf-8,${encodeURIComponent(icsContent)}`;

    // Open the data URI to trigger the calendar app
    window.location.href = dataUri;
	};

	return (
		<Container
			fluid
			className='rsvp-container min-vh-100 w-100 w-sm-90 w-md-75 px-0 px-sm-3 pt-2 pt-sm-3 d-flex flex-column justify-content-between'
			id='rsvp'
		>
			<Row className='pt-5'>
				<h1 className='px-5 text-center'>RSVP</h1>
			</Row>
			<Row className='px-sm-0 d-flex justify-content-center'>
				<Row className='px-5'>
					<span className='doodle-span d-flex justify-content-center'>
						<LayingDoodle />
					</span>
				</Row>
				<Row className='rsvp-row-container px-5'>
					<Col xs='12' sm='12' md='4' className='email-column p-2 p-sm-3 p-md-4 p-lg-5'>
						<p>
							Feel free to contact us if you have additional questions.
						</p>
						<div className='btn-wrapper'>
							<span className='span-container'>
								<span className='mb-5'>
									<a href='mailto: barriga.samantha@gmail.com' aria-label='Email address' className='text-decoration-none' style={{ color: 'inherit'}}>
										<i className='pe-2 bi bi-envelope-heart' />
										Email us!
									</a>
								</span>
							</span>
						</div>
					</Col>
					<Col xs='12' sm='12' md='4' className='rsvp-btn-column p-2 p-sm-3 p-md-4 p-lg-5'>
						<p className='mb-4'>
							Please RSVP by <strong>August 10</strong>, to help us finalize arrangements. <br /> In case you missed it above here, again, the RSVP form.
						</p>
						<div className='d-flex justify-content-center pb-md-5'>
							<button className='button-55 rsvp-btn' role='button'>
								<a
									href='https://docs.google.com/forms/d/e/1FAIpQLSeb96PN2yCs9EsAPzcfAT0wC8Y9TrquhyJWD7JDcFU-VWp8bw/viewform'
									target='_blank'
									className='text-decoration-none text-dark'
								>
									RSVP
								</a>
							</button>
						</div>
					</Col>
					<Col xs='12' sm='12' md='4' className='calendar-column p-2 p-sm-3 p-md-4 p-lg-5'>
						<span>
							<p className='mb-3'>Join us in celebrating! Save the date to your calendar.</p>
						</span>

						<div
							className='btn-wrapper'
							onClick={() => handleAddToCalendar()}
						>
							<span className='span-container bottom'>
								<span>
									<i className='pe-2 bi bi-calendar-heart' />
									Add to calendar
								</span>
							</span>
						</div>
					</Col>
				</Row>
				{showMessage && (
					<Toast isOpen={showMessage}>
						<ToastHeader toggle={() => setShowMessage(false)}>
							Whoopsie!
						</ToastHeader>
						<ToastBody>
							Use Safari to add event to your calendar.
						</ToastBody>
					</Toast>
				)}
			</Row>
		</Container>
	);
}
