import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Routedata } from './common/rounting-data.tsx'

const baseUrl = import.meta.env.BASE_URL;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={baseUrl} element={<App />}>
          {Routedata.map((idx) => (
            <Route key={idx.id} path={idx.path} element={idx.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
