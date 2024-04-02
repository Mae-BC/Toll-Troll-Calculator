import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './components/App.tsx'
import Bridges from './components/Bridges.tsx'
import Bridge from './components/Bridge.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Bridges />} />
    <Route path="/:id" element={<Bridge />} />
  </Route>,
)
