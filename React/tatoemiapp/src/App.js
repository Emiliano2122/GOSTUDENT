import AppRouter from './AppRouter';
import './App.css';
import Card from "./Components/Card";
import Navbar from './Components/Navbar';


function App() {
  return (
    <>
      <div>
        <Navbar />
        <AppRouter/>
      </div>
    </>
  );
}

export default App;
