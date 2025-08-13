import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Details from "../pages/Details/Details";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/details/:id",
                Component: Details
            },
        ]
    },
]);