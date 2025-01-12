import { useState, useEffect } from 'react';
import {
	Navbar, Nav, NavItem, NavLink,
	Container, Col,
} from 'reactstrap';

import { navLinks } from './navLinks';
import './navbar.scss';

export default function NavbarContainer() {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	
	useEffect(()=>{
		const handleResize = () => {
			if (window.innerWidth <= 768) {
				setShowMobileMenu(true)
			} else {
				setShowMobileMenu(false)
			}
		};
		
		handleResize();
		
		window.addEventListener('resize', handleResize);
		
		// Cleanup on unmount
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])
	
	return (
		<>
			{showMobileMenu ? (
				// <MobileNavbar />
				null
			) : (
				<Container fluid className='navbar-container'>
					<Navbar fixed='top'>
						<Col className='d-flex justify-content-center'>
							<Nav>
								{navLinks && navLinks.map((link, idx) => (
									<NavItem key={idx}>
										<NavLink href={link.href}>
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