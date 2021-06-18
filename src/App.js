import './App.css';
import CardProfile from './profile/profile';
import monimage from './monimage.jpg';
function App() {
  return (
    <div className="App">
        <img src={monimage} alt=""/>
        <CardProfile 
          
          fullName ="Haouari SAID"
          profession ="Full-stack developer"
          bio = "born in sahline and live i SA"
        
        />
    </div>
  );
}

export default App;   
