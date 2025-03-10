import { useState, useEffect } from 'react';

import './countdowntimer.scss';

export default function CountdownTimer({ targetDate }) {
	const [timeLeft, setTimeLeft] = useState(null);
	const [isMobile, setIsMobile] = useState(false);
	const [animationTriggered, setAnimationTriggered] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 576) {
				setIsMobile(true);
			}
			else {
				setIsMobile(false);
			}
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [isMobile]);

	useEffect(() => {
		const interval = setInterval(() => {
			const newTimeLeft = calculateTimeLeft(targetDate);
			setTimeLeft(newTimeLeft);

			if (newTimeLeft.total <= 0) {
				clearInterval(interval); // Stop the countdown when it reaches 0
			}
		}, 1000);

		// Cleanup function
		return () => clearInterval(interval);
	}, [targetDate]);

	useEffect(() => {
		const animatedCountdowns = document.querySelectorAll('.countdown-container');

		const handleScrollAnimation = (entries, observer) => {
			entries.forEach(entry => {
				if(entry.isIntersecting && !animationTriggered) {
					// Add classes to trigger animation
					entry.target.classList.add('animated-countdown');
					setAnimationTriggered(true);
					observer.unobserve(entry.target); // Stop observing after animation starts
				}
			});
		};

		// Create IntersectionObserver instance
		const observer = new IntersectionObserver(handleScrollAnimation, {
			root: null, // Viewport
			threshold: 0.2 // Trigger when 20% of element is in the view
		});

		// Loop through all countdown containers and observe each one
		animatedCountdowns.forEach((element) => observer.observe(element));

		return () => {
			animatedCountdowns.forEach((element) => observer.unobserve(element));
			setAnimationTriggered(false);
		};

	},[animationTriggered])

	// Function to calculate the time left between now and target date
	const calculateTimeLeft = (target) => {
		const now = Date.now();
		const difference = new Date(target) - now;

		const days = Math.floor(difference / (1000 * 60 * 60 * 24));
		const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
		const minutes = Math.floor((difference / (1000 * 60)) % 60);
		const seconds = Math.floor((difference / 1000) % 60)

		if (difference > 0) {
			return { total: difference, days, hours, minutes, seconds };
		} else {
			return {
				total: 0,
				days: 0,
				hours: 0,
				minutes: 0,
				seconds: 0
			}
		}
	}

	return (
		<>
			{isMobile && timeLeft &&
			<div className='countdown-container-mobile d-flex flex-column justify-content-center'>
				<div className='d-flex justify-content-center align-items-center'>
					<div className='countdown-circle days d-flex flex-column'>
						<p className='number'>{(timeLeft?.days < 10) ? `0${timeLeft?.days}` : timeLeft?.days}</p>
						<p className='time'>days</p>
					</div>
					<div className='countdown-circle hours d-flex flex-column'>
						<p className='number'>{(timeLeft?.hours < 10) ? `0${timeLeft?.hours}` : timeLeft?.hours}</p>
						<p className='time'>hours</p>
					</div>
				</div>
				<div className='d-flex justify-content-center align-items-center'>
					<div className='countdown-circle minutes d-flex flex-column'>
						<p className='number'>{(timeLeft?.minutes < 10) ? `0${timeLeft?.minutes}` : timeLeft?.minutes}</p>
						<p className='time'>minutes</p>
					</div>
					<div className='countdown-circle seconds d-flex flex-column'>
						<p className='number'>{(timeLeft?.seconds < 10) ? `0${timeLeft?.seconds}` : timeLeft?.seconds}</p>
						<p className='time'>seconds</p>
					</div>
				</div>
			</div>
			}
			{!isMobile && timeLeft &&
			<div className='countdown-container w-75 m-auto p-2 d-flex justify-content-center align-items-center flex-nowrap'>
				<div className='countdown-cube days'>
					<p className='number'>{(timeLeft?.days < 10) ? `0${timeLeft?.days}` : timeLeft?.days}</p>
					<p className='time'>days</p>
				</div>
				<div className='countdown-cube hours'>
					<p className='number'>{(timeLeft?.hours < 10) ? `0${timeLeft?.hours}` : timeLeft?.hours}</p>
					<p className='time'>hours</p>
				</div>
				<div className='countdown-cube minutes'>
					<p className='number'>{(timeLeft?.minutes < 10) ? `0${timeLeft?.minutes}` : timeLeft?.minutes}</p>
					<p className='time'>minutes</p>
				</div>
				<div className='countdown-cube seconds'>
					<p className='number'>{(timeLeft?.seconds < 10) ? `0${timeLeft?.seconds}` : timeLeft?.seconds}</p>
					<p className='time'>seconds</p>
				</div>
			</div>
			}
		</>
	);
}
