import { createBrowserRouter } from "react-router";
import { AppLayout } from './AppLayout';
// import { UseNavHook } from './Component/Hooks/UseNavHook/UseNavHook';
// import { UseStateHook } from './Component/Hooks/UseStateHook/UseStateHook';
// import { App } from './App';
// import { FirstComponent } from './Component/FirstComponent/FirstComponent'
import { lazy } from "react";





const AppComponent = lazy(()=> import('./App'))
const FirstComp = lazy(()=>import('./Component/FirstComponent/FirstComponent'))
const UseNavHookComponent = lazy(()=>import('./Component/Hooks/UseNavHook/UseNavHook'))
const UseStateHookComponent = lazy(()=>import('./Component/Hooks/UseStateHook/UseStateHook'))
const UseRefHookComponent = lazy(()=>import('./Component/Hooks/UseRefHook/UseRefHook'))
const FormValidation = lazy(()=>import('./Component/FormValidation/FormValidation'))
const UseEffectHook = lazy(()=>import('./Component/Hooks/UseEffectHook/UseEffectHook'))
const UseContextHook = lazy(()=>import('./Component/Hooks/UseContextHook/UseContextHook'))
const UseMemoHook = lazy(()=>import('./Component/Hooks/UseMemoHook/UseMemoHook'))
const UseCallBackHook = lazy(()=>import('./Component/Hooks/UseCallBackHook/UseCallBackHook'))








// export const router = createBrowserRouter([
//     {
//       path: '/',
//       Component: AppLayout,
//       children: [
//         {
//           index: true,
//           Component: App
//         },
//         {
//           path: "/firstComponent",
//           Component: FirstComponent,
//         },
//         {
//           path: "/useStateHook",
//           Component: UseStateHook,
//         },
//         {
//           path: "/useNavHook",
//           Component: UseNavHook,
//         },
//       ]
//     }
//   ])



export const router = createBrowserRouter([
    {
      path: '/',
      Component: AppLayout,
      children: [
        {
          index: true,
          Component: AppComponent
        },
        {
          path: "/firstComponent",
          Component: FirstComp,
        },
        {
          path: "/useStateHook",
          Component: UseNavHookComponent,
        },
        {
          path: "/useNavHook",
          Component: UseStateHookComponent,
        },
        {
          path: "/useRefHook",
          Component: UseRefHookComponent,
        },
        {
          path: "/formValidation",
          Component: FormValidation,
        },
        {
          path: "/useEffect",
          Component: UseEffectHook,
        },
        {
          path: "/useContextHook",
          Component: UseContextHook,
        },
        {
          path: "/useMemoHook",
          Component: UseMemoHook,
        },
        {
          path: "/useCallBackHook",
          Component: UseCallBackHook,
        },
      ]
    }
  ])