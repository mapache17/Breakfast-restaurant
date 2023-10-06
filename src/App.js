import { BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import SearchBox from './components/searchBox';
import Home from './pages/home';
import RecipeDetails from './pages/recipeDetails';

  
function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar>
					<SearchBox />
				</Navbar>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/recipe/:id" element={<RecipeDetails />} />
				</Routes>
			</div>
		</Router>
	);
  }

export default App;
