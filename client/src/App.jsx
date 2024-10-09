import './App.css'
import { Route, Routes } from "react-router-dom";
import Characters from './pages/Characters/Characters';
import CharacterDetails from './pages/CharacterDetails/CharacterDetails';
import NavBar from './components/NavBar/NavBar';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Characters />} />
        <Route exact path='/character/:id' element={<CharacterDetails />} />
      </Routes>
    </>
  )
}

export default App
