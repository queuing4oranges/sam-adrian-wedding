import { useState } from 'react';
import { Navbar, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import { motion, AnimatePresence } from 'framer-motion';

import { navLinks } from './navLinks';

import './mobilenavbar.scss';
import Xicon from '../../assets/svgs/Xicon';

export default function MobileNavbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Navbar
			className='mobile-navbar position-fixed w-100'
			style={{ backgroundColor: isOpen ? 'white' : 'transparent' }}
		>
			<span className='d-flex justify-content-end w-100'>
				<button
					className='mobile-navbar-toggle-btn' 
					size='lg'
					onClick={() => setIsOpen(!isOpen)}
					style={{ backgroundColor: isOpen ? 'white' : 'transparent' }}
				>
					<AnimatePresence mode='wait'>
					{isOpen ? (
						<motion.div
							key='close'
							initial={{ rotate: 0, opacity: 0 }}
							animate={{ rotate: 180, opacity: 1 }}
							exit={{ rotate: 0, opacity: 0 }}
							transition={{ duration: 0.3 }}
						>
							<Xicon width={25} height={30} color={'#164443'} />
						</motion.div>
					) : (
						<motion.i
							key='dots'
							className='fs-1 bi bi-three-dots'
							initial={{ opacity: 0, scale: 0.5 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.5 }}
							transition={{ duration: 0.3 }}
							style={{color: '#164443'}}
						/>
					)}
					</AnimatePresence>
				</button>
			</span>
			<Collapse isOpen={isOpen} navbar>
				<Nav navbar>
					{navLinks && navLinks.map((link, idx) => (
						<NavItem key={idx}>
							<NavLink href={link.href} onClick={() => setIsOpen(!isOpen)}>{link.name}</NavLink>
						</NavItem>
					))}
				</Nav>
			</Collapse>
		</Navbar>
	);
}
