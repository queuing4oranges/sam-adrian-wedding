import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import {
	Navbar, Nav, NavItem,
	Container, Col,
} from 'reactstrap';

import { navLinks } from './navLinks';
import MobileNavbar from './MobileNavbar';
import './navbar.scss';

export default function NavbarContainer() {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const [activeLink, setActiveLink] = useState('');

	// Handle what Navbar will be shown
	useEffect(()=>{
		const handleResize = () => {
			if (window.innerWidth <= 768) {
				setShowMobileMenu(true)
			} else {
				setShowMobileMenu(false)
			}
		};

		// Listen for changes in the URL (hash) and update active link
		const handleHashChange = () => {
			setActiveLink(window.location.hash); // Update active link based on hash
		};

		// handleResize();
		window.addEventListener('resize', handleResize);
		window.addEventListener('hashchange', handleHashChange);

		// Cleanup on unmount
		return () => {
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('hashchange', handleHashChange);
		}
	}, [])

	return (
		<>
			{showMobileMenu ? (
				<MobileNavbar />
			) : (
				<nav>
      <ul>
        <li>
          <Link to="welcome" smooth duration={500}>Welcome</Link>
        </li>
        <li>
          <Link to="details" smooth duration={500}>Details</Link>
        </li>
        <li>
          <Link to="itinerary" smooth duration={500}>Itinerary</Link>
        </li>
        <li>
          <Link to="travel" smooth duration={500}>Travel</Link>
        </li>
        <li>
          <Link to="faq" smooth duration={500}>FAQ</Link>
        </li>
      </ul>
    </nav>
				// <Container fluid className='navbar-container'>
				// 	<Navbar fixed='top'>
				// 		<Col className='d-flex justify-content-center'>
				// 			<Nav>
				// 				{navLinks && navLinks.map((link, idx) => (
				// 					<NavItem key={idx}>
				// 						<a
				// 							href={link.href}
				// 							className={`nav-link ${activeLink === link.href ? 'active' : ''}`}
				// 						>
				// 							{link.name}
				// 						</a>
				// 					</NavItem>
				// 				))}
				// 			</Nav>
				// 		</Col>
				// 	</Navbar>
				// </Container>
			)}
		</>
	);
}