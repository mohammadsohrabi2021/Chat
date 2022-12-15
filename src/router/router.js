import { createBrowserRouter } from "react-router-dom";
import Chats from "../Components/Chats/Chats";
import Login from "../Components/Login/Login";
const router = createBrowserRouter([
    {
        path:'/',
        element:<Login/>,
    },
    {
        path:'/chats',
        element:<Chats/>,
    },
    
]);

export default router