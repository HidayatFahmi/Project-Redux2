import { useState, useContext, useEffect} from 'react'
import { RegisterContext } from '../context/RegisterProvider';

export const RegisterPage = () => {

const {onHandleRegister, token} = useContext(RegisterContext);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleEmail=(event)=>{
    setEmail(event.target.value);
  }

  const handlePass = (event) => {
    setPass(event.target.value);
  }

  const handleRegister =() => {
    onHandleRegister(email,pass)
  }

  return(
    <div className='display-grid'>
        <div><input type="text" placeholder="Masukkan Email" onChange={handleEmail} className='display-block'/></div>
        <div><input type="text" placeholder='Masukkan Password' onChange={handlePass}/></div>
        <button onClick={handleRegister}>Submit</button>
      </div> 
  )
}