import { useState, useEffect } from 'react';

import './countdowntimer.scss';

export default function CountdownTimer({ targetDate }) {
	const [timeLeft, setTimeLeft] = useState(null);

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
			{timeLeft &&
			<div className='countdown-container p-2 d-flex justify-content-center align-items-center'>
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
