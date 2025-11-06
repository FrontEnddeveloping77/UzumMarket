import React from "react";
import { useRoutes } from "react-router-dom";
import Home from './Pages/Home/Home';
import Elektronika from "./Pages/Elektronika/Elektronika";
import Error from "./Pages/ErrorPage/Error";

export const Routes = () => {
    const PublicRoute = [
        {
            children: [
                { path: "/", element: <Home /> },
                { path: "/Elektronika", element: <Elektronika /> },
                { path: "/*", element: <Error /> },
            ],
        },
    ];

    return useRoutes(PublicRoute);
};
