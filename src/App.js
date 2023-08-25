import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Chennai from "./components/Chennai"
import HeroBanner from "./components/HeroBanner"
function App() {
  return (
    <div className="App">
        <Header></Header>
        <Chennai></Chennai>
        <HeroBanner></HeroBanner>
    </div>
  );
}

export default App;
