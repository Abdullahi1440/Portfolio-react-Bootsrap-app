
import './App.css';
import { Herosection } from './Component/Herosection';
import {   Navbars } from './Component/Navbars';
import Aboutus from './Component/Aboutus';
import Project from './Component/Project';
import Contactus from './Component/Contactus';
import Footer from './Component/Footer';


function App() {
  return (

    <div className="App">
 <Navbars/>
<Herosection/>
<Aboutus/>
<Project/>
<Contactus/>
<Footer/>
    </div>
  );
}

export default App;
