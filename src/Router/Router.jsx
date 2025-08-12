import { createBrowserRouter } from "react-router";
import App from "../App";


export const router = createBrowserRouter([
    {
        path: "/",
        children: [
            { index: true, Component: App },
            // {path: "about", Component: App },
        ]
    },
]);