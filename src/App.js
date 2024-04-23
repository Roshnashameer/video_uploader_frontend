import './App.css';
import Home from './pages/Home';
import Landing from './pages/Landing';
import { Route,Routes} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import History from './pages/History';
import SubCategories from './components/SubCategories';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Landing></Landing>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/watch-history' element={<History></History>}></Route>
        <Route path='/subcategories/:id' element={<SubCategories></SubCategories> }></Route>

      </Routes>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
