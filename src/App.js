
import './App.css';
import Mainseg from './components/mainseg/mainseg';
import Sidebar from './components/sidebar/sidebar';
import {TfiAlignLeft} from 'react-icons/tfi';
function App() {
  function bindr(){
    const side=document.querySelector('.sidebar');
    const container=document.querySelector('.container');
    side.style.display='block';
    side.style.width='20vw';
    container.style.width='80vw';
  }
  return (
    <div className="App">
      <TfiAlignLeft className='out' size={40} color='black' onClick={bindr}></TfiAlignLeft>
      <Sidebar/>
      <Mainseg/>
    </div>
  );
}

export default App;
