import React from 'react'
import './connect.css'
import {FaPaperPlane,} from 'react-icons/fa'
const connect = () => {
  return (
    <div className='inpit'>
    <textarea rows={5} cols={100} id="name" type="text" placeholder='Ask something...'/>
    <button>
			<span><FaPaperPlane/></span>
			<span>Send</span>
		</button></div>
  )
}

export default connect