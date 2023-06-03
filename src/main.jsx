import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import {
  Route,
  RouterProvider,
  createHashRouter,
  createRoutesFromElements
} from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import ContentLayout from './components/layouts/CotentLayout';
import './index.css'

const Home = lazy(() => import('./routes/Home'))
const Videos = lazy(() => import('./routes/Videos'))
const FanSite = lazy(() => import('./routes/FanSite'))
const NotFound = lazy(() => import('./components/pages/404'))

const routesFromElements = createRoutesFromElements(
  <Route element={<ContentLayout />}>
    <Route index element={<Home />} />
    <Route path="*" element={<NotFound />} />
    <Route path="videos" element={<Videos />} />
    <Route path="fansite" element={<FanSite />} />
  </Route>
)

const router = createHashRouter(routesFromElements)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>,
)
