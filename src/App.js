// import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Home} from './pages/home';
import {Author} from './pages/author';
import {Post} from './pages/post';
function App() {
  return (
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='authors/:id' element={<Author/>}/>
  <Route path='posts/:id' element={<Post/>}/>
</Routes>
  );
}


export default App;
