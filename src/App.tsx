import './App.scss';
import Home from './components/home/Home';
import Technology from './components/technology/Technology';
import Destination from './components/destination/Destination';
import Crew from './components/crew/Crew';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
	<main className={activeClass}>
		<Navbar />
		{children}
	</main>
);

const App = () => (
	<Router>
		<Routes>
			{routes.map(({ path, activeClass, component }) => (
				<Route
					key={path}
					path={path}
					element={<Container activeClass={activeClass}>{component}</Container>}
				/>
			))}
		</Routes>
	</Router>
);

export default App;
