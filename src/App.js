
import './App.css';
import './Style.css'
import Images from './components/profil/ProfilPhoto.js'
import Name from './components/profil/FullName.js'
import Adresse from './components/profil/Address'
function App() {
  return (
    <div className="App">
      <Name />
      <Adresse />
      <Images/>
     
    </div>
  );
}

export default App;
