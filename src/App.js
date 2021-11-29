import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import First from './components/First/First';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Second, Third } from './components/Second/Second';


function App() {
  return (
 <div>
    <Header/>
    <First/>
    <Third/>
    <Second/>
    <Footer/>
 </div>
  );
}

export default App;
