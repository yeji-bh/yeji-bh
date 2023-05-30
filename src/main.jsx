import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import {
  Routes,
  Route,
  HashRouter
} from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import './index.css'

const Home = lazy(() => import('./routes/Home'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <HashRouter>
        <Routes>
          <Route
            index
            element={
              <Suspense fallback={<>loading...</>}>
                <Home />
              </Suspense>
            }
          />
          <Route path="*" element={<div />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
