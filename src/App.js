import { Routes, Route } from 'react-router-dom';

import Signin from './components/signin/Signin';
import Signup from './components/signup/Signup'
import Sidebar from './components/sidebar/Sidebar';
import Library from './components/library/Library';
import Music from './components/music/Music';
import Record from './components/record/Record';
import Favorites from './components/favorites/Favorites'
import Radio from './components/radio/Radio';
import Settings from "./components/settings/Settings"

function App() {
  return (
    <div className='App'>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Sidebar' element={<Sidebar />} />
          <Route path='/Library' element={<Library />} />
          <Route path='/Music' element={<Music />} />
          <Route path='/Record' element={<Record />} />
          <Route path='/Favorites' element={<Favorites />} />
          <Route path='/Radio' element={<Radio />} />
          <Route path='/Settings' element={<Settings />} />
        </Routes>
    </div>
  );
}

export default App;
