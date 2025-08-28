import Home from "../pages/home";
import Suggestion from "../pages/suggestion";
import Details from "../pages/detail";

export const Routedata = [
    {
        path: `${import.meta.env.BASE_URL}`,
        element: <Home />,
    },
    {
        path: `${import.meta.env.BASE_URL}/suggestion`,
        element: <Suggestion />,
    },
    {
        path: `${import.meta.env.BASE_URL}/detail/:id`,
        element: <Details />,
    }
].map((route, index) => ({
    ...route,
    id: index + 1,
}));