import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import First from './components/first/First';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { Second, Third } from './components/second/Second';


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
