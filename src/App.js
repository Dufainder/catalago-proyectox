
import {Route, Routes} from 'react-router-dom'; 
import Landing from './components/landingPage/indexLanding';
import Inicio from './components/Cards';


function App() {
  return (

      <Routes>
        <Route path="/" element={<Landing/>}/> 
        <Route path="/inicio" element={<Inicio/>}/>
      </Routes>
  

  );
}

export default App;

