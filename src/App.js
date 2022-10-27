import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Home/Navbar/Navbar';
import Home from './Pages/Home/Home/Home';
import About from './Pages/Home/About/About';
import Review from './Pages/Home/Review/Review';


function App() {
	return (
		<div> 
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/review" element={<Review />} />
			</Routes>
		</div>
	);
}

export default App;
