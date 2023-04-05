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
		initial={{ x: '100%' }}
		animate={{ x: 0 }}
		exit={{ x: '-100%' }}
		transition={{
			// type: 'tween',
			// stiffness: 260,
			// damping: 20,
			duration: 1,
		}}
	>
		<Navbar />
		{children}
	</motion.main>
);

const App = () => {
	const location = useLocation();
	const pageKey = location.pathname;
	return (
		<AnimatePresence initial={false} mode="popLayout">
			<Routes key={pageKey}>
				{routes.map(({ path, activeClass, component }) => (
					<Route
						key={pageKey}
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
