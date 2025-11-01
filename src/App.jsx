import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import ItemDetail from './pages/ItemDetail'
import AddItem from './pages/AddItem'
import Chat from './pages/Chat'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'
import './App.css'
import './index.css'

const App = () => {
return (
<div className="flex flex-col min-h-screen">
<Navbar />
<main className="flex-grow">
<Routes>
<Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />
<Route path="/" element={<Home />} />
<Route path="/item/:id" element={<ItemDetail />} />
<Route path="/add-item" element={<ProtectedRoute><AddItem /></ProtectedRoute>} />
<Route path="/chat" element={<ProtectedRoute><Chat /></ProtectedRoute>} />
<Route path="/chat/:userId" element={<ProtectedRoute><Chat /></ProtectedRoute>} />
<Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
<Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
<Route path="*" element={<Navigate to="/" replace />} />
</Routes>
</main>
<Footer />
</div>
)
}

export default App