import logo from './logo.svg';
import './App.css';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import NavBar from'./components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <div className="header_grad">
       <NavBar/>
      </div>
     
      <Body/>
      
      <Footer/>
    </div>
  );
}

export default App;
