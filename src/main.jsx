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

const HomePage = lazy(() => import('./routes/Home'))
const VideosPage = lazy(() => import('./routes/Videos'))
const FanSitePage = lazy(() => import('./routes/FanSite'))
const DataPage = lazy(() => import('./routes/Data'))
const NotFoundPage = lazy(() => import('./components/pages/404'))

const routesFromElements = createRoutesFromElements(
  <Route element={<ContentLayout />}>
    <Route index element={<HomePage />} />
    <Route path="*" element={<NotFoundPage />} />
    <Route path="videos" element={<VideosPage />} />
    <Route path="fansite" element={<FanSitePage />} />
    <Route path="data" element={<DataPage />} />
  </Route>
)

const router = createHashRouter(routesFromElements)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <ThemeProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  </React.Fragment>,
)
