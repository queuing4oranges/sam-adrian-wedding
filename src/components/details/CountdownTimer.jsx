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
	}, [targetDate])

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
		<div className='d-flex align-items-end justify-content-between countdown-container'>
			{timeLeft &&
				<>
					<h1>{(timeLeft?.days < 10) ? `0${timeLeft?.days}` : timeLeft?.days}</h1><h4 className='ms-2'>days</h4>
					<h1>:</h1>
					<h1>{(timeLeft?.hours < 10) ? `0${timeLeft?.hours}` : timeLeft?.hours}</h1><h4 className='ms-2'>hours</h4>
					<h1>:</h1>
					<h1>{(timeLeft?.minutes < 10) ? `0${timeLeft?.minutes}` : timeLeft?.minutes}</h1><h4 className='ms-2'>minutes</h4>
					<h1>:</h1>
					<h1>{(timeLeft?.seconds < 10) ? `0${timeLeft?.seconds}` : timeLeft?.seconds}</h1><h4 className='ms-2'>seconds</h4>
				</>
			}
		</div>
	)
}
