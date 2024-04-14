import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { NotFound } from './pages/404'
import { Dashboard } from './pages/app/dashboard/dashboard'
import { Orders } from './pages/app/orders/orders'
import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'
import { Error } from './pages/error'

export const router = createBrowserRouter([
  {
    path: '/Trilha-Ignite-Projeto-04/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/Trilha-Ignite-Projeto-04/', element: <Dashboard /> },
      { path: '/Trilha-Ignite-Projeto-04/orders', element: <Orders /> },
    ],
  },
  {
    path: '/Trilha-Ignite-Projeto-04/',
    element: <AuthLayout />,
    children: [
      { path: '/Trilha-Ignite-Projeto-04/sign-in', element: <SignIn /> },
      { path: '/Trilha-Ignite-Projeto-04/sign-up', element: <SignUp /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
