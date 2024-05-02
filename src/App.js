/** @format */

import "./App.css";
import "@fontsource/mr-dafoe";
import "@fontsource-variable/roboto-mono";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header/Header";
import { RUTAS } from "./Const/Const";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Detalles from "./Pages/Detalles/Detalles";
import AcercaDe from "./Pages/AcercaDe/AcercaDe";
import Footer from "./Components/Footer/Footer";

const router = createBrowserRouter([
  {
    path: RUTAS.home,
    element: <Home />,
  },
  {
    path: RUTAS.acercaDe,
    element: <AcercaDe />,
  },
  {
    path: RUTAS.detalles,
    element: <Detalles />,
  },
]);

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <RouterProvider router={router} />
      <Footer></Footer>
    </div>
  );
}

export default App;
