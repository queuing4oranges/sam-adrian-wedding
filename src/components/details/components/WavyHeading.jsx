import './wavyheading.scss';

export default function WavyHeading() {
	return (
		<div className='wavy-heading-container mt-3'>
			<svg width='100%' height='150' viewBox='0 0 1400 150'>
				<defs>
					<path 
						id='wavePath' 
						d='M 50,100 
						   C 300,0 500,200 700,100 
						   S 1150,200 1350,100' 
					/>
				</defs>
				<text textAnchor='middle'>
					<textPath href='#wavePath' startOffset='50%'>
						Monday, September 8 - Friday, September 12
					</textPath>
				</text>
			</svg>
		</div>
	);
}
