import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import './index.css'

const Home = lazy(() => import('./routes/Home'))
const Videos = lazy(() => import('./routes/Videos'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <Suspense fallback={<>努力加载中...</>}>
                <Home />
              </Suspense>
            }
          />
          <Route path="*" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
