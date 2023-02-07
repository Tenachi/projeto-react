

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import User from './webpages/user';
import Home from './webpages/home';
import Basic from './basic';
import Form from './signup/index';
import SearchById from './webpages/searchById';


function App() {
  return (
    <div className="App">
      <BrowserRouter>      
        <Routes>
          <Route path='/user' element={<User/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/basic' element={<Basic/>} />
          <Route path='/form' element={<Form/>} />
          <Route path='/searchById' element={<SearchById/>}/>
        </Routes>
    
      </BrowserRouter>
     
    </div>
  );
}

export default App;