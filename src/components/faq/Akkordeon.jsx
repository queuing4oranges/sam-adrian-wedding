import './akkordeon.scss';
import '../../components/button55.scss';

export default function Akkordeon() {
	return (
		<nav className='accordion arrows'>

			<input type='checkbox' name='accordion' id='cb1' />
			<section className='box'>
				<label className='box-title d-flex justify-content-between' htmlFor='cb1'>
					<span>What should I pack?</span>
					<i className='bi bi-envelope-heart' />
					<i className='bi bi-envelope-open-heart' />
				</label>
				<div className='box-content'>
					Include a swimsuit! <br />
					We won&apos;t know if there will be rain until the date is closer and I will let everyone know, regardless we will have fun
				</div>
			</section>

			<input type='checkbox' name='accordion' id='cb2' />
			<section className='box'>
				<label className='box-title d-flex justify-content-between' htmlFor='cb2'>
					<span>How do I sign up to be a carpool driver?</span>
					<i className='bi bi-envelope-heart' />
					<i className='bi bi-envelope-open-heart' />
				</label>
				<div className='box-content'>
					<span className='d-flex flex-column align-items-center'>
						<span className='m-0 me-2'>
							Keep in mind this is for those living in the Czech Republic. For those flying in, please do not rent a car as it is not needed. To sign up as a driver, fill out the section in our RSVP form.
						</span>
						<button className='button-55 faq-rsvp-btn' role='button'>
							<a href='https://docs.google.com/forms/d/e/1FAIpQLSeb96PN2yCs9EsAPzcfAT0wC8Y9TrquhyJWD7JDcFU-VWp8bw/viewform' target='_blank' className='text-decoration-none text-dark'>
								RSVP
							</a>
						</button>
					</span>
				</div>
			</section>

			<input type='checkbox' name='accordion' id='cb3' />
			<section className='box'>
				<label className='box-title d-flex justify-content-between' htmlFor='cb3'>
					<span>Can I bring a plus one?</span>
					<i className='bi bi-envelope-heart' />
					<i className='bi bi-envelope-open-heart' />
				</label>
				<div className='box-content'>
					No, all guests personally invited are welcomed only.
				</div>
			</section>

			<input type='checkbox' name='accordion' id='cb4' />
			<section className='box'>
				<label className='box-title d-flex justify-content-between' htmlFor='cb4'>
					<span>How will our time be spent aside from partying in the evenings?</span>
					<i className='bi bi-envelope-heart' />
					<i className='bi bi-envelope-open-heart' />
				</label>
				<div className='box-content'>
					During the day we will have time to play volleyball, swim, walk in nature, play games, or just relax. Activities may depend on the weather and your preferences. There will be free unscheduled time too.
				</div>
			</section>
		</nav>
	);
}
