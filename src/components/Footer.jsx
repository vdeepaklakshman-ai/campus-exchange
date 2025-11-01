import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
return (
<footer className="bg-dark text-white mt-16">
<div className="container-custom py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div>
<h3 className="text-xl font-heading font-bold mb-4">Campus Exchange</h3>
<p className="text-gray-400 text-sm">
Secure marketplace for college students to buy, sell, and exchange items within campus.
</p>
</div>

<div>
<h4 className="font-heading font-semibold mb-4">Quick Links</h4>
<ul className="space-y-2">
<li><Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">Marketplace</Link></li>
<li><Link to="/add-item" className="text-gray-400 hover:text-white transition-colors duration-200">Sell Item</Link></li>
<li><Link to="/dashboard" className="text-gray-400 hover:text-white transition-colors duration-200">Dashboard</Link></li>
<li><Link to="/chat" className="text-gray-400 hover:text-white transition-colors duration-200">Messages</Link></li>
</ul>
</div>

<div>
<h4 className="font-heading font-semibold mb-4">Support</h4>
<ul className="space-y-2">
<li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Help Center</a></li>
<li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Safety Guidelines</a></li>
<li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a></li>
<li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
</ul>
</div>

<div>
<h4 className="font-heading font-semibold mb-4">Contact Us</h4>
<ul className="space-y-2">
<li className="flex items-center space-x-2 text-gray-400">
<Mail className="w-4 h-4" />
<span className="text-sm">support@campusexchange.edu</span>
</li>
<li className="flex items-center space-x-2 text-gray-400">
<Phone className="w-4 h-4" />
<span className="text-sm">+91 1234567890</span>
</li>
<li className="flex items-center space-x-2 text-gray-400">
<MapPin className="w-4 h-4" />
<span className="text-sm">College Campus, City</span>
</li>
</ul>
<div className="flex space-x-4 mt-4">
<a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
<Facebook className="w-5 h-5" />
</a>
<a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
<Twitter className="w-5 h-5" />
</a>
<a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
<Instagram className="w-5 h-5" />
</a>
</div>
</div>
</div>

<div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
<p>&copy; 2024 Campus Exchange. All rights reserved.</p>
</div>
</div>
</footer>
)
}

export default Footer