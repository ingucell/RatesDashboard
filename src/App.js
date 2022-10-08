import logo from './logo.svg';
import Timer from './components/timer/Timer'
import Side from './components/sidepane/Side'
import './App.css'
import Teller from './components/teller/Teller';
import Slide from './components/slide/Slide';

function App() {
  return (
    <div className="home">

        <Side />

        <Teller />

        <Slide />


        <div className='middle'>
        <Timer />
        </div>



    </div>
  );
}

export default App;
