import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Home/Navbar/Navbar';
import Home from './Pages/Home/Home/Home';


function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
