import React from 'react'
import '../Style/header.css'
import Modal from 'react-modal';
import { useState } from 'react'
import FacebookLogin from 'react-facebook-login';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


export default function Header() {
  const [isLoginModalOpen, setLohginModal] = useState(false)
  const [isRegisterModalOpen, setRegisterModal] = useState(false)
  return (
    <div className="header">
        <div className='s-logo'>
            <span>e!</span>
        </div>
        <div className='btn-group login-block'>
            <span className='login' onClick={()=>setLohginModal(true)}>Login</span>
            <span className='signup' onClick={()=>setRegisterModal(true)}>Create an account</span>     
        </div>
        <Modal isOpen={isLoginModalOpen}
        style={customStyles}>
          <div>
          <h2>Login Modal</h2>
          <button onClick={()=>setLohginModal(false)} className="btn btn-danger">X</button>
          </div>
           {/*three different ways of login*/}
          <div>
           <form>
            <input placeholder='enter your username'type="text"></input><br/><br/>
            <input placeholder='enter your password'type="text"></input><br/><br/>
            <button className='btn btn-primary'>Login</button>
            <div>
              
            </div>
           </form>

          </div>
          <div>
          <FacebookLogin
    appId="1088597931155576"
    autoLoad={true}
    fields="name,email,picture"
    />
  

          </div>

          </Modal>
   <Modal
   isOpen={isRegisterModalOpen}
   style={customStyles}>
    <div><h2>Register</h2>
          <button onClick={()=>setRegisterModal(false)} className="btn btn-danger">X</button>
          </div>
   
          <div>
           <form>
            <input placeholder='enter your username'type="text"></input><br/><br/>
            <input placeholder='enter your password'type="text"></input><br/><br/>
            <button className='btn btn-primary'>Register</button>
            
           </form>

          </div>
   </Modal>
    </div>
  )
}
