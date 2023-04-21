import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Albums from './routes/Albums'
import Search from './routes/Search'
import Home from './routes/Home'
import Callback from './routes/Callback'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}  />
        <Route path="/search" element={<Search />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/albums" >
          <Route path=":artist" element={<Albums />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App
