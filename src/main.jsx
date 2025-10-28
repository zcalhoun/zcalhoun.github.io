import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Research from './pages/Research.jsx'
import Teaching from './pages/Teaching.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'

const router = createHashRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: 'research', element: <Research /> },
            { path: 'teaching', element: <Teaching /> },
            { path: 'blog', element: <Blog /> },
            { path: 'contact', element: <Contact /> },
        ],
    },
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
