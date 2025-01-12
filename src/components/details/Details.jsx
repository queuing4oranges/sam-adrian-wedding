import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

export default function Details() {
	const AutoplaySlider = withAutoplay(AwesomeSlider);

	const slider = (
		<AutoplaySlider
			play={true}
			cancelOnInteraction={false}
			interval={3000}
			bullets={false}
			organicArrows={false}
			infinite={true}
		>
			<div data-src='../../src/assets/sam-and-adrian/1.png'/>
			<div data-src='../../src/assets/sam-and-adrian/2.png'/>
			<div data-src='../../src/assets/sam-and-adrian/3.png'/>
			<div data-src='../../src/assets/sam-and-adrian/4.png'/>
			<div data-src='../../src/assets/sam-and-adrian/5.png'/>
			<div data-src='../../src/assets/sam-and-adrian/6
			.png'/>	
		</AutoplaySlider>
	)
	return (
		<div>{slider}</div>
	)
}
