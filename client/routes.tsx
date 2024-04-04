import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './components/App.tsx'
import Bridges from './components/Bridges.tsx'
import LoginRedirect from './components/LoginRedirect.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Bridges />} />
    <Route path="/register" element={<LoginRedirect />} />
  </Route>
)
