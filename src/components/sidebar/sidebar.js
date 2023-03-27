import React from 'react'
import './sidebar.css'
import { TfiFile,TfiArrowLeft} from "react-icons/tfi";
const sidebar = () => {
  function Bob(){
    const sidebar =document.querySelector('.sidebar');
    const container=document.querySelector('.container');
    sidebar.style.display='none';
    container.style.width='100vw';
  }
  return (
    <div className='sidebar'>
        <div className='but' >
            <button>ADD</button>
            <p>more files</p>
            <TfiArrowLeft className='In' size={20} onClick={Bob}></TfiArrowLeft>
        </div>
        <ul>
            <li><TfiFile  size={30} color='white'/>
                <p>xyz.pdf</p></li>
                <li><TfiFile size={30} color='white'/>
                <p>xyz.pdf</p></li>
                <li><TfiFile  size={30} color='white'/>
                <p>xyz.pdf </p></li>
                <li><TfiFile  size={30} color='white'/>
                <p>xyz.pdf</p></li>
                <li><TfiFile  size={30} color='white'/>
                <p>xyz.pdf</p></li>
                <li><TfiFile  size={30} color='white'/>
                <p>xyz.pdf</p></li>
        </ul>
    </div>
  )
}

export default sidebar;