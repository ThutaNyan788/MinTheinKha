import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "./App";
import FirstPage from "./pages/First/FirstPage";
import SecondPage from "./pages/Second/SecondPage";
import ThirdPage from "./pages/Third/ThirdPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:"/",
            element:<FirstPage/>
        },
        {
            path:"/numberList/:questionNo",
            element:<SecondPage/>,
            children:[
              {
                path:":answerNo",
                element:<ThirdPage/>
            }
            ]
        },
        
      ]
    }
  ]);