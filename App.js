import logo from './logo.svg';
import './App.css';
import SignUp from './components/signUp';
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import Login from './components/login';

function App() {
  return (
    <div className="App">
 <BrowserRouter>
 <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<SignUp/>}/> 
 </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
