import './akkordeon.scss';
import '../../components/button55.scss';

export default function Akkordeon() {
	return (
		<nav className='accordion arrows'>

			<input type='radio' name='accordion' id='cb1' />
			<section className='box'>
				<label className='box-title' htmlFor='cb1'>What should I pack?</label>
				<label className='box-close' htmlFor='acc-close'></label>
				<div className='box-content'>
					Include a swimsuit! <br />
					We won&apos;t know if there will be rain until the date is closer and I will let everyone know, regardless we will have fun
				</div>
			</section>

			<input type='radio' name='accordion' id='cb2' />
			<section className='box'>
				<label className='box-title' htmlFor='cb2'>How do I sign up for carpooling?</label>
				<label className='box-close' htmlFor='acc-close'></label>
				<div className='box-content'>
					<span className='d-flex align-items-center'>
						<p className='m-0 me-2'>
							Use our RSVP Form
							<i className='bi bi-arrow-right-short' />
						</p>
						<button className='button-55 faq-rsvp-btn' role='button'>
							<a href='https://docs.google.com/forms/d/e/1FAIpQLSeb96PN2yCs9EsAPzcfAT0wC8Y9TrquhyJWD7JDcFU-VWp8bw/viewform' target='_blank' className='text-decoration-none text-dark'>
								RSVP
							</a>
						</button>
					</span>
				</div>
			</section>

			<input type='radio' name='accordion' id='cb3' />
			<section className='box'>
				<label className='box-title' htmlFor='cb3'>Can I bring a plus one?</label>
				<label className='box-close' htmlFor='acc-close'></label>
				<div className='box-content'>
					No, all guests personally invited are welcomed only.
				</div>
			</section>

			<input type='radio' name='accordion' id='cb4' />
			<section className='box'>
				<label className='box-title' htmlFor='cb4'>How will our time be spent aside from drinking/partying in the evenings?</label>
				<label className='box-close' htmlFor='acc-close'></label>
				<div className='box-content'>
					During the day we will have time to play volleyball, swim, walk in nature, play games, or just relax. Activities may depend on the weather and your preferences. There will be free unscheduled time too.
				</div>
			</section>
		</nav>
	);
}
