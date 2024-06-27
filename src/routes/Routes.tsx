import { createBrowserRouter, RouteObject } from "react-router-dom";
import Home from "../pages/Home";

const routes: RouteObject[] = [{ index: true, element: <Home /> }];

export default routes;
export const router = createBrowserRouter(routes);
