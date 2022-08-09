import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/home';
import LoginPage from './Pages/login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<HomePage/>} />
          <Route path="*" element={<HomePage />} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
