import {useContext} from 'react'
import { RegisterContext } from './context/RegisterProvider';
import { EmailConfirmation } from './pages/EmailConfirmationPage';
import { RegisterPage } from './pages/RegisterPage';
import './App.css'

function App() {
  const {token} = useContext(RegisterContext);

  return (
   <div>
    {!token.length?
      <RegisterPage/>:
      <EmailConfirmation/>
    }
   </div>
  )
}

export default App
