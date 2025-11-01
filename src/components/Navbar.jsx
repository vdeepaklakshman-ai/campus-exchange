import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X, ShoppingBag, MessageCircle, User, LogOut, Plus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '../contexts/AuthContext'
import { useChat } from '../contexts/ChatContext'

const Navbar = () => {
const [menuOpen, setMenuOpen] = useState(false)
const { user, isAuthenticated, logout } = useAuth()
const { getUnreadCount } = useChat()
const navigate = useNavigate()
const unreadCount = getUnreadCount()

const handleLogout = () => {
logout()
navigate('/login')
setMenuOpen(false)
}

const navLinks = [
{ path: '/', label: 'Marketplace', icon: ShoppingBag },
{ path: '/chat', label: 'Messages', icon: MessageCircle, badge: unreadCount },
{ path: '/add-item', label: 'Sell Item', icon: Plus },
{ path: '/dashboard', label: 'Dashboard', icon: User }
]

return (
<nav className="bg-white shadow-md sticky top-0 z-50">
<div className="container-custom">
<div className="flex items-center justify-between h-16">
<Link to="/" className="flex items-center space-x-2">
<ShoppingBag className="w-8 h-8 text-primary" />
<span className="text-2xl font-heading font-bold text-primary">Campus Exchange</span>
</Link>

<div className="hidden md:flex items-center space-x-6">
{navLinks.map(link => (
<Link
key={link.path}
to={link.path}
className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors duration-200 relative"
>
<link.icon className="w-5 h-5" />
<span>{link.label}</span>
{link.badge > 0 && (
<span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
{link.badge}
</span>
)}
</Link>
))}

{isAuthenticated ? (
<div className="flex items-center space-x-4">
<Link to="/profile" className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors duration-200">
<User className="w-5 h-5" />
<span>{user?.name}</span>
</Link>
<button onClick={handleLogout} className="flex items-center space-x-2 text-gray-700 hover:text-red-500 transition-colors duration-200">
<LogOut className="w-5 h-5" />
<span>Logout</span>
</button>
</div>
) : (
<div className="flex items-center space-x-4">
<Link to="/login" className="text-gray-700 hover:text-primary transition-colors duration-200">
Login
</Link>
<Link to="/signup" className="btn-primary">
Sign Up
</Link>
</div>
)}
</div>

<button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
{menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
</button>
</div>
</div>

<AnimatePresence>
{menuOpen && (
<motion.div
initial={{ height: 0, opacity: 0 }}
animate={{ height: 'auto', opacity: 1 }}
exit={{ height: 0, opacity: 0 }}
transition={{ duration: 0.3 }}
className="md:hidden bg-white border-t overflow-hidden"
>
<div className="container-custom py-4 space-y-4">
{navLinks.map(link => (
<Link
key={link.path}
to={link.path}
onClick={() => setMenuOpen(false)}
className="flex items-center space-x-3 text-gray-700 hover:text-primary transition-colors duration-200 py-2"
>
<link.icon className="w-5 h-5" />
<span>{link.label}</span>
{link.badge > 0 && (
<span className="bg-red-500 text-white text-xs rounded-full px-2 py-1">
{link.badge}
</span>
)}
</Link>
))}

{isAuthenticated ? (
<>
<Link to="/profile" onClick={() => setMenuOpen(false)} className="flex items-center space-x-3 text-gray-700 hover:text-primary transition-colors duration-200 py-2">
<User className="w-5 h-5" />
<span>Profile</span>
</Link>
<button onClick={handleLogout} className="flex items-center space-x-3 text-gray-700 hover:text-red-500 transition-colors duration-200 py-2 w-full text-left">
<LogOut className="w-5 h-5" />
<span>Logout</span>
</button>
</>
) : (
<div className="space-y-2">
<Link to="/login" onClick={() => setMenuOpen(false)} className="block py-2 text-gray-700 hover:text-primary transition-colors duration-200">
Login
</Link>
<Link to="/signup" onClick={() => setMenuOpen(false)} className="block btn-primary text-center">
Sign Up
</Link>
</div>
)}
</div>
</motion.div>
)}
</AnimatePresence>
</nav>
)
}

export default Navbar