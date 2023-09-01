import Login from './Login';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Signup from './Signup';
import Home from './Home';
import Profile from './Profile';
import ProfileDisplay from './ProfileDisplay';

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/Signup' element={<Signup/>}></Route>
            <Route path='/Login' element={<Login/>}></Route>
            <Route path='/Home' element={<Home/>}></Route>
            <Route path='/Profile' element={<Profile/>}></Route>
            <Route path="/ProfileDisplay" element={<ProfileDisplay />} />
          </Routes>
    </BrowserRouter>
  );
}
export default App;