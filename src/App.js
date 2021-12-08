import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hamburger from './components/Hamburger/Hamburger';

function App() {
    return (
        <Router>
            <Navbar />
            <Hamburger />
            <Routes>
                <Route path='/' />
            </Routes>
        </Router>
    );
}

export default App;
