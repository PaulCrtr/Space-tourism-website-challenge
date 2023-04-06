import './App.scss';
import Home from './components/home/Home';
import Technology from './components/technology/Technology';
import Destination from './components/destination/Destination';
import Crew from './components/crew/Crew';
import Navbar from './components/navbar/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
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
		// initial={{ opacity: 0 }}
		// animate={{ opacity: 1 }}
		// exit={{ opacity: 0 }}
		// transition={{
		// 	type: 'spring',
		// 	duration: 1,
		// }}
	>
		<Navbar />
		<motion.section
		// initial={{ x: -70, opacity: 0 }}
		// animate={{ x: 0, opacity: 1 }}
		// transition={{
		// 	type: 'spring',
		// 	duration: 0.7,
		// }}
		>
			{children}
		</motion.section>
	</motion.main>
);

const App = () => {
	return (
		//todo: enlever le flash blanc au refresh (et le saut vers le bas, peut être lié aux logos svg qui chargent)
		//todo: faire marcher avec mode="popLayout"
		<AnimatePresence initial={false} mode="popLayout">
			<Routes key={useLocation().pathname}>
				{routes.map(({ path, activeClass, component }) => (
					<Route
						key={path}
						path={path}
						element={
							<Container activeClass={activeClass}>{component}</Container>
						}
					/>
				))}
			</Routes>
		</AnimatePresence>
	);
};

export default App;
