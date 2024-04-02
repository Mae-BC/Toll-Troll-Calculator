import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './components/App.tsx'
import Bridges from './components/Bridges.tsx'
import SaveBridge from './components/SaveBridge.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Bridges />} />
    <Route path="/fav" element={<SaveBridge />} />
  </Route>,
)
