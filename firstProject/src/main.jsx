import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstComponent } from './Component/FirstComponent/FirstComponent'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { UseStateHook }  from './Component/Hooks/UseStateHook/UseStateHook';
import { App } from './App';



createRoot(document.getElementById('root')).render(
  <StrictMode>

  {/* <FirstComponent></FirstComponent> */}
  {/* <UseStateHook></UseStateHook> */}

<App></App>
  

  
  </StrictMode>,
)
