import React from "react";
import { Route, Routes } from "react-router-dom";
import SectionMain from "../components/pages/SectionMain";
import TheShop from "../components/pages/TheShop";
import Admin from "../components/Admin/Admin";

const MyRoute = () => {
    const MORTAL_ROUTES = [
        { link: "/", element: <SectionMain />, id: 1 },
        { link: "/the_shop", element: <TheShop />, id: 2 },
        { link: "/admin", element: <Admin />, id: 3 },
    ];
    return (
        <Routes>
            {MORTAL_ROUTES.map((el) => (
                <Route path={el.link} element={el.element} key={el.id} />
            ))}
        </Routes>
    );
};

export default MyRoute;
