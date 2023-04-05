// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/Home/home';
// import Home_v2 from './pages/Home_v2/home_v2';
// import News from './pages/News/News';
// import AboutUs from './pages/AboutUs/AboutUs';
// import Mentorship from './pages/Mentorship/Mentorship'
// import Support from './pages/Support/Support'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        {/* <Route exact path='/' element={<Home />}></Route> */}
        {/* <Route exact path='/' element={<Home />}></Route> */}
        {/* <Route exact path='/' element={<Home />}></Route> */}
        {/* <Route exact path='/' element={<Home />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
