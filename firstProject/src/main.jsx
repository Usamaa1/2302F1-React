import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstComponent } from './Component/FirstComponent/FirstComponent'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { UseStateHook } from './Component/Hooks/UseStateHook/UseStateHook';
import { App } from './App';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { AppLayout } from './AppLayout';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element:  <h1 className="text-3xl font-bold underline">Hello world!</h1>,
//   },
//   {
//     path: "/app",
//     Component: App,
//   },
//   {
//     path: "/firstComponent",
//     Component: FirstComponent,
//   },
//   {
//     path: "/useStateHook",
//     Component: UseStateHook,
//   },
// ]);


const router = createBrowserRouter([
  {
    path: '/',
    Component: AppLayout,
    children: [
      {
        index: true,
        Component: App
      },
      {
        path: "/firstComponent",
        Component: FirstComponent,
      },
      {
        path: "/useStateHook",
        Component: UseStateHook,
      },
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* <FirstComponent></FirstComponent> */}
    {/* <UseStateHook></UseStateHook> */}

    {/* <App></App> */}
    <RouterProvider router={router} />,




  </StrictMode>,
)
