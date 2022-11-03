import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Home/Navbar/Navbar';
import Home from './Pages/Home/Home/Home';
import About from './Pages/Home/About/About';
import Review from './Pages/Home/Review/Review';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import ResetPassword from './Pages/Login/ResetPassword';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path='/appointment' element={
					<RequireAuth >
						<Appointment />
					</RequireAuth>
				} />
				<Route path="/review" element={<Review />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/forgot" element={<ResetPassword />} />
			</Routes>
			<ToastContainer />
		</div>
	);
}

export default App;
