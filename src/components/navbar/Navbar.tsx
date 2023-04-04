import { useState } from 'react';
import './Navbar.scss';
import Logo from '../../assets/shared/logo.svg';
import IconHamburger from '../../assets/shared/icon-hamburger.svg';
import IconClose from '../../assets/shared/icon-close.svg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	const [open, setOpen] = useState('');
	return (
		<nav>
			<div className="head">
				<img src={Logo} alt="logo" className="logo" />
				<img
					onClick={() => setOpen('open')}
					src={IconHamburger}
					alt="icon-hamburger"
					className={`icon-hamburger ${open}`}
				/>
			</div>
			<div className={`links ${open}`}>
				<div className="icon-close-container">
					<img src={Logo} alt="logo" className="logo" />
					<img
						onClick={() => setOpen('')}
						src={IconClose}
						alt="icon-close"
						className="icon-close"
					/>
				</div>
				<ul>
					<li>
						<NavLink to="/">
							<div className="navbar-link-text">
								<div>00</div>HOME
							</div>
						</NavLink>
					</li>
					<li>
						<NavLink to="/destination">
							<div className="navbar-link-text">
								<div>01</div>DESTINATION
							</div>
						</NavLink>
					</li>
					<li>
						<NavLink to="/crew">
							<div className="navbar-link-text">
								<div>02</div>CREW
							</div>
						</NavLink>
					</li>
					<li>
						<NavLink to="/technology">
							<div className="navbar-link-text">
								<div>03</div>TECHNOLOGY
							</div>
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
