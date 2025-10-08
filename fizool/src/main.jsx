import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { App } from './App'
import { SecondApp } from './SecondApp'
import 'bootstrap/dist/css/bootstrap.min.css';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App></App> */}
    <SecondApp></SecondApp>

  </StrictMode>,
)
