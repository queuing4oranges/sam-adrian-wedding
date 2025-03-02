import './App.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';


function App() {

	return (
		<>
			<Router basename='/'>
				<Routes>
					<Route  exact path='/' element={<Home />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
