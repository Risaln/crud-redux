import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import Add from './Pages/Add';
import Edit from './Pages/Edit';

function App() {
  return (
    <div className="App">
     
     <Header/>
     <Routes>
      <Route path='/' element= {<Home/>} />
      <Route path='/add' element= {<Add/>} />
      <Route path='/edit/:id' element={<Edit/>}/>




     </Routes>

     <Footer/>

    </div>
  );
}

export default App;
