import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layouts/Root';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Service from './Pages/Service/Service';
import Portfolio from './Pages/Portfolio/Portfolio';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Team from './Pages/Team/Team';
import Pricing from './Pages/Pricing/Pricing';
import Faq from './Pages/Faq/Faq';
const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
        { index: true, Component: Home },
          { path: "about", Component: About },
          { path: "service", Component: Service },
          { path: "portfolio", Component: Portfolio },
          { path: "blog", Component: Blog },
          { path: "contact", Component: Contact },
          { path: "team", Component: Team },
          { path: "pricing", Component: Pricing },
          { path: "faq", Component: Faq },
        ],
    },
]);
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />,
)
