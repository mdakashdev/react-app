import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About"
import App from "../App"
import List from "../pages/List.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/home",
        element: <Home/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/list",
        element: <List/>
    }
]);

export default router;
