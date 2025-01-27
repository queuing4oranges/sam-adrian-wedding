import { useState } from 'react';
import {
	Accordion,
	AccordionBody,
	AccordionHeader,
	AccordionItem,
	Button
} from 'reactstrap';

function Example() {
	const [open, setOpen] = useState('');

	const toggle = (id) => {
		if (open === id) {
			setOpen();
		} else {
			setOpen(id);
		}
	};

return (
	<Accordion open={open} toggle={toggle}>
		<AccordionItem>
			<AccordionHeader targetId='1'><h3>What should I pack?</h3></AccordionHeader>
			<AccordionBody accordionId='1'>
				<ul>
					<li>Include a swimsuit!</li>
					<li>We won&apos;t know if there will be rain until the date is closer and I will let everyone know, regardless we will have fun</li>
				</ul>
			</AccordionBody>
		</AccordionItem>
		<AccordionItem>
			<AccordionHeader targetId='2'><h3>How do I sign up for carpooling?</h3></AccordionHeader>
			<AccordionBody accordionId='2'>
				<ul>
					<li>Use our RSVP Form</li>
				</ul>
				<span>
					<i className='bi bi-hand-index rotate-90 mx-4' />
					<Button>RSVP</Button>
				</span>
			</AccordionBody>
		</AccordionItem>
		<AccordionItem>
			<AccordionHeader targetId='3'><h3>Can I bring a plus one?</h3></AccordionHeader>
			<AccordionBody accordionId='3'>
				<ul>
					<li>No, all guests personally invited are welcomed only.</li>
				</ul>
			</AccordionBody>
		</AccordionItem>
				<AccordionItem>
			<AccordionHeader targetId='4'><h3>How will our time be spent aside from drinking/partying in the evenings?</h3></AccordionHeader>
			<AccordionBody accordionId='4'>
				<ul>
					<li>During the day we will have time to play volleyball, swim, walk in nature, play games, or just relax. Activities may depend on the weather and your preferences. There will be free unscheduled time too.</li>
				</ul>
			</AccordionBody>
		</AccordionItem>
	</Accordion>
);
}

export default Example;