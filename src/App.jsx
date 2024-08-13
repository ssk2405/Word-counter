import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      
<Navbar name="Word Counter" />

<div className="container">
<TextForm head="Enter some Text"/>
</div>
    </>
  );
}

export default App;
