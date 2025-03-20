import './wavyheading.scss';

export default function WavyHeading() {
	return (
		<div className='wavy-heading-container mt-3'>
			{/* Desktop/One-Line Text */}
			<svg width='100%' height='150' viewBox='0 0 1400 150' className='desktop-text'>
				<defs>
					<path 
						id='waveDesktopPath'
						d='M 50,100 
						   C 300,0 500,200 700,100 
						   S 1150,200 1350,100' 
					/>
				</defs>
				<text textAnchor='middle'>
					<textPath href='#waveDesktopPath' startOffset='50%'>
						Monday, September 8 - Friday, September 12
					</textPath>
				</text>
			</svg>

			{/* Mobile/Three-Line Text */}
			<svg width='100%' height='250' viewBox='0 0 1400 200' className='mobile-text'>
				<defs>
					<path
						id='wavePath1'
						d='M 50,100
						   C 300,20 500,180 700,100
						   S 1150,180 1350,100'
					/>
					<path
						id='wavePath2'
						d='M 50,180
						   C 300,100 500,260 700,180
						   S 1150,260 1350,180'
					/>
					<path
						id='wavePath3'
						d='M 50,260
						   C 300,180 500,340 700,260
						   S 1150,340 1350,260'
					/>
				</defs>
				<text textAnchor='middle' className='mobile-text'>
					<textPath href='#wavePath1' startOffset='50%'>
						Monday September 8
					</textPath>
				</text>
				<text textAnchor='middle' className='mobile-text'>
					<textPath href='#wavePath2' startOffset='50%'>
						-
					</textPath>
				</text>
				<text textAnchor='middle' className='mobile-text'>
					<textPath href='#wavePath3' startOffset='50%'>
						Friday, September 12
					</textPath>
				</text>
			</svg>
		</div>
	);
}
