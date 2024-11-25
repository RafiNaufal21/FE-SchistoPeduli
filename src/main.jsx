import React from "react";
import ReactDOM from "react-dom/client";

import "../src/css/bootstrap.min.css";
import "../src/css/style.css";
import "../src/css/peta.css";
import "../src/css/psikososial.css";

import "../src/css/lanjut_donasi.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Eduschisto from "./pages/Eduschisto";
import Kamera from "./fragments/Kamera";
import DeteksiKeong from "./pages/DeteksiKeong";
import Peta from "./pages/Peta";
import Tentang from "./pages/Tentang";
import DetailArtikel from "./pages/Detail-artikel";
import Error from "./pages/404";
import LanjutDonasi from "./pages/LanjutDonasi";
import 'leaflet/dist/leaflet.css';

import Resetpassword from "./pages/Resetpassword";
import PolygonMap from "./pages/poligon";
import Map from "./pages/testing"

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/testing",
    element:<Map/>,
    errorElement:<Error/>
  },
  {
    path:"/lokasi",
    element:<PolygonMap/>
  },
  {
    path: "/eduschisto",
    element: <Eduschisto />,
  },
  {
    path: "/kamera",
    element: <Kamera />,
  },
  {
    path: "/deteksikeong",
    element: <DeteksiKeong />,
  },
  {
    path: "/lanjutDonasi",
    element: <LanjutDonasi />,
  },
  {
    path: "/peta",
    element: <Peta />,
  },
  {
    path: "/tentang",
    element: <Tentang />,
  },
  {
    path: "/detail-artikel/:id",
    element: <DetailArtikel />,
  },

  {
    path: "/resetpassword",
    element: <Resetpassword />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
