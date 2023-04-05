import './App.scss';
import Home from './components/home/Home';
import Technology from './components/technology/Technology';
import Destination from './components/destination/Destination';
import Crew from './components/crew/Crew';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const routes = [
	{
		component: <Home />,
		path: '/',
		activeClass: 'home',
	},
	{
		component: <Destination />,
		path: '/destination',
		activeClass: 'destination',
	},
	{
		component: <Crew />,
		path: '/crew',
		activeClass: 'crew',
	},
	{
		component: <Technology />,
		path: '/technology',
		activeClass: 'technology',
	},
];

const Container = ({
	children,
	activeClass,
}: {
	children: JSX.Element;
	activeClass: string;
}) => (
	<motion.main
		className={activeClass}
		initial={{ x: 300, opacity: 0 }}
		animate={{ x: 0, opacity: 1 }}
		exit={{ x: 300, opacity: 0 }}
		transition={{
			type: 'spring',
			stiffness: 260,
			damping: 20,
		}}
	>
		<Navbar />
		{children}
	</motion.main>
);

const App = () => {
	return (
		<Router>
			<AnimatePresence mode="wait">
				<Routes>
					{routes.map(({ path, activeClass, component }) => (
						<Route
							key={path}
							path={path}
							element={
								<Container key={path} activeClass={activeClass}>
									{component}
								</Container>
							}
						/>
					))}
				</Routes>
			</AnimatePresence>
		</Router>
	);
};

export default App;
