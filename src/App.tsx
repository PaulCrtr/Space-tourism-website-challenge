import './App.scss';
import Home from './components/home/Home';
import Technology from './components/technology/Technology';
import Destination from './components/destination/Destination';
import Crew from './components/crew/Crew';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

type ContainerProps = {
	children: JSX.Element;
	activeClass: string;
};

const Container = ({ children, activeClass }: ContainerProps) => (
	<main className={activeClass}>
		<Navbar />
		{children}
	</main>
);

const App = () => (
	<Router>
		<Routes>
			<Route
				path="/"
				element={
					<Container activeClass="home">
						<Home />
					</Container>
				}
			/>
			<Route
				path="/destination"
				element={
					<Container activeClass="destination">
						<Destination />
					</Container>
				}
			/>
			<Route
				path="/crew"
				element={
					<Container activeClass="crew">
						<Crew />
					</Container>
				}
			/>
			<Route
				path="/technology"
				element={
					<Container activeClass="technology">
						<Technology />
					</Container>
				}
			/>
		</Routes>
	</Router>
);

export default App;
