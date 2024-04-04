import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { routes } from './routes.tsx'
const queryClient = new QueryClient()

const router = createBrowserRouter(routes)

const root = createRoot(document.getElementById('app') as HTMLElement)
root.render(
  <Auth0Provider
    domain="toho.au.auth0.com"
    clientId="lIzODkPbS9ZTcSn0s7t8YvR7hIEqrSFj"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: 'https://troll-toll-calculator/api',
    }}
  >
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </Auth0Provider>,
)
