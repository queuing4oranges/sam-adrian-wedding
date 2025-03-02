import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
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
				<Container fluid className='navbar-container'>
					<Navbar fixed='top'>
						<Col className='d-flex justify-content-center'>
							<Nav>
								{navLinks && navLinks.map((link, idx) => (
									<NavItem key={idx}>
										<NavLink className='nav-link' to={`/${link.href}`} smooth='true' duration={1000}>
											{link.name}
										</NavLink>
									</NavItem>
								))}
							</Nav>
						</Col>
					</Navbar>
				</Container>
			)}
		</>
	);
}