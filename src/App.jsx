import { NavLink, Outlet } from 'react-router-dom'
import './App.css'

const navLinks = [
    { to: '/', label: 'Home', end: true },
    { to: '/research', label: 'Research' },
    { to: '/teaching', label: 'Teaching' },
    { to: '/resources', label: 'Resources' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },

]

function App() {
    return (
        <div className="page">
            <nav className="nav">
                <NavLink to="/" className="nav__brand" end>
                    Zachary D. Calhoun
                </NavLink>
                <ul className="nav__links">
                    {navLinks.map((link) => (
                        <li key={link.to}>
                            <NavLink
                                to={link.to}
                                end={link.end}
                                className={({ isActive }) =>
                                    isActive ? 'nav__link nav__link--active' : 'nav__link'
                                }
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <Outlet />

            <footer className="footer">
                <p>© {new Date().getFullYear()} Zachary D. Calhoun. Vibe-coded using Codex.</p>
            </footer>
        </div>
    )
}

export default App
